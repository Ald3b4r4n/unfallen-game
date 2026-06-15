import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/firebase/admin";
import { validateAndNormalizeSave } from "@/lib/save/save-schema";
import { writeSaveRecord } from "@/lib/save/save-repository";

export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Não autorizado." },
      { status: 401 }
    );
  }

  const token = authHeader.substring(7);

  try {
    const user = await verifyIdToken(token);
    const body = await request.json();
    
    // Valida e sanitiza o payload de save (isso descarta campos extras do body como userId)
    const normalizedSave = validateAndNormalizeSave(body);

    await writeSaveRecord(user.uid, normalizedSave);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && (
      error.message.includes("slot") || 
      error.message.includes("schemaVersion") || 
      error.message.includes("inventário") || 
      error.message.includes("updatedAt") || 
      error.message.includes("playerState") || 
      error.message.includes("gameStats")
    )) {
      return NextResponse.json(
        { error: `Dados de save inválidos: ${error.message}` },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Não autorizado ou payload inválido." },
      { status: 401 }
    );
  }
}
