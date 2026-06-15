import { SavePayload, validateAndNormalizeSave } from "./save-schema";

const NAMESPACE = "unfallen:save:slot";

export function saveLocal(slot: number, data: SavePayload): boolean {
  if (typeof window === "undefined") return false;
  try {
    const validated = validateAndNormalizeSave(data);
    localStorage.setItem(`${NAMESPACE}:${slot}`, JSON.stringify(validated));
    return true;
  } catch (error) {
    console.error("Erro ao salvar localmente:", error);
    return false;
  }
}

export function loadLocal(slot: number): SavePayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(`${NAMESPACE}:${slot}`);
    if (!raw) return null;
    return validateAndNormalizeSave(JSON.parse(raw));
  } catch (error) {
    console.error("Erro ao carregar save local:", error);
    return null;
  }
}

export function deleteLocal(slot: number): boolean {
  if (typeof window === "undefined") return false;
  try {
    localStorage.removeItem(`${NAMESPACE}:${slot}`);
    return true;
  } catch (error) {
    console.error("Erro ao deletar save local:", error);
    return false;
  }
}
