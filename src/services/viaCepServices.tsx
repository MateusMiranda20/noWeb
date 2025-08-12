export interface Address {
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}

export const getAddressFromCep = async (cep: string): Promise<Address> => {
  const cleanedCep = cep.replace(/\D/g, '');

  if (cleanedCep.length !== 8) {
    throw new Error('CEP inválido. O CEP deve conter 8 números.');
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);

    if (!response.ok) {
      throw new Error('Falha na comunicação com o serviço ViaCEP.');
    }

    const data: Address & { erro?: boolean } = await response.json();

    if (data.erro) {
      throw new Error('CEP não encontrado.');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Não foi possível buscar o CEP. Verifique sua conexão.');
  }
};
