import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p>© {year} CyberVeiculos - Aluguel de Veículos</p>
        <section>
          <h2>Sobre Nós</h2>
          <p>
            Fundada em 2020, a CyberVeiculos nasceu da visão de criar uma experiência de aluguel de carros totalmente digitalizada e centrada no usuário. Com uma frota diversificada e uma plataforma simples e intuitiva, nos dedicamos a oferecer o melhor serviço de locação do mercado. Nossa missão é simplificar sua viagem, proporcionando conforto e conveniência a cada quilômetro percorrido. Venha fazer parte da nossa história e descubra um novo jeito de alugar veículos.
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;