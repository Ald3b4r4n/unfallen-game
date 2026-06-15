import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/firebase/admin";
import { deleteSaveRecord } from "@/lib/save/save-repository";

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const slotParam = searchParams.get("slot");

  if (!slotParam || isNaN(Number(slotParam)) || Number(slotParam) !== 1) {
    return NextResponse.json(
      { error: "Parâmetro slot inválido. O MVP suporta apenas o slot 1." },
      { status: 400 }
    );
  }

  const slot = Number(slotParam);
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
    await deleteSaveRecord(user.uid, slot);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(

      { error: "Token inválido ou expirado." },
      { status: 401 }
    );
  }
}
