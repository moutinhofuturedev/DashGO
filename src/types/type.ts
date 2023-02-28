// Tipagem resposta da API
export type ResponseApi = {
  id: string;
  name: string;
  email: string;
  createdAd: string;
};

// Tipagem de formulário
export type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

// Tipagem de email
export type SignInFormData = {
  email: string;
  password: string;
};

// Tipagem do usuário Mirage
export type User = {
  name: string;
  email: string;
  created_at: string;
};
