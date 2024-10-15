import React from 'react';
import { Button } from 'react-bootstrap';

function NotFound() {
    return (
      <div>
        <h2>404 - Página não encontrada</h2>
        <p>A página que você está procurando não existe.</p>
        <Button variant="primary" href="/">Voltar para a Página Inicial</Button>
      </div>
    );
  }
  
  export default NotFound;  