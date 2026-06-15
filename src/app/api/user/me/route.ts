import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/firebase/admin";

export async function GET(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json(
      { error: "Não autorizado. Token ausente." },
      { status: 401 }
    );
  }

  if (!authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Não autorizado. Formato do token inválido." },
      { status: 401 }
    );
  }

  const token = authHeader.substring(7);

  try {
    const user = await verifyIdToken(token);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json(

      { error: "Token inválido ou expirado." },
      { status: 401 }
    );
  }
}
