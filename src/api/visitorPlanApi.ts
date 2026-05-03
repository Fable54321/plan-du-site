const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getVisitorPlan = async (token: string) => {
  const response = await fetch(`${API_BASE_URL}/plan/visitor-plan/${token}`);

  if (!response.ok) {
    throw new Error("Lien invalide ou expiré.");
  }

  return response.json();
};