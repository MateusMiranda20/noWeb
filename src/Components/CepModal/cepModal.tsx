import { useState } from 'react';
import { getAddressFromCep } from '../../services/viaCepServices'

// Tipos do endereço retornado pela API
interface Address {
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}

interface CepModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const modalStyles: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '50px',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  zIndex: 1000,
  width: '400px'
};

const overlayStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex: 999
};

const inputGroupStyles: React.CSSProperties = {
  marginBottom: '15px',
  width: '100%'
};

const labelStyles: React.CSSProperties = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold'
};

const inputStyles: React.CSSProperties = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box'
};

const buttonStyles: React.CSSProperties = {
  padding: '10px 20px',
  cursor: 'pointer'
};

export default function CepModal({ isOpen, onClose }: CepModalProps) {
  const [cep, setCep] = useState<string>('');
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    setIsLoading(true);
    setError('');
    setAddress(null);

    try {
      const addressData: Address = await getAddressFromCep(cep);
      setAddress(addressData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erro desconhecido');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div style={overlayStyles} onClick={onClose} />
      <div style={modalStyles}>
        <h2>Consulta de CEP</h2>
        <div style={inputGroupStyles}>
          <label htmlFor="cep" style={labelStyles}>Digite o CEP:</label>
          <input
            type="text"
            id="cep"
            style={inputStyles}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="00000-000"
          />
        </div>

        <button
          onClick={handleSearch}
          style={buttonStyles}
          disabled={isLoading}
        >
          {isLoading ? 'Buscando...' : 'Pesquisar'}
        </button>

        <button onClick={onClose} style={{ ...buttonStyles, marginLeft: '10px' }}>Fechar</button>

        {isLoading && <p style={{ marginTop: '15px' }}>Carregando...</p>}
        {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}

        {address && (
          <div style={{ marginTop: '20px' }}>
            <div style={inputGroupStyles}>
              <label style={labelStyles}>Logradouro:</label>
              <input type="text" style={inputStyles} value={address.logradouro || ''} disabled />
            </div>
            <div style={inputGroupStyles}>
              <label style={labelStyles}>Complemento:</label>
              <input type="text" style={inputStyles} value={address.complemento || ''} disabled />
            </div>
            <div style={inputGroupStyles}>
              <label style={labelStyles}>Bairro:</label>
              <input type="text" style={inputStyles} value={address.bairro || ''} disabled />
            </div>
            <div style={inputGroupStyles}>
              <label style={labelStyles}>Cidade:</label>
              <input type="text" style={inputStyles} value={address.localidade || ''} disabled />
            </div>
            <div style={inputGroupStyles}>
              <label style={labelStyles}>UF:</label>
              <input type="text" style={inputStyles} value={address.uf || ''} disabled />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
