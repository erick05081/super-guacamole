function atualizarContador() {
  const dataInicial = new Date("2025-03-04T09:30:00"); // Define a data inicial
  const agora = new Date();
  const diferencaEmMilissegundos = agora - dataInicial;

  if (diferencaEmMilissegundos < 0) {
    document.getElementById("resultado").innerText = "A data ainda não chegou!";
    return;
  }

  const segundosTotais = Math.floor(diferencaEmMilissegundos / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const diasTotais = Math.floor(horasTotais / 24);

  const segundos = segundosTotais % 60;
  const minutos = minutosTotais % 60;
  const horas = horasTotais % 24;

  document.getElementById(
    "resultado"
  ).innerText = `${diasTotais} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função imediatamente para exibir o valor assim que a página carregar
atualizarContador();
