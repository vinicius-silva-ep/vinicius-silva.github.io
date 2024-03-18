<?php
// Define o caminho do arquivo de contagem
$arquivoContagem = 'contador.txt';

// Lê o valor atual do contador do arquivo
$contagemAtual = (file_exists($arquivoContagem)) ? (int)file_get_contents($arquivoContagem) : 0;

// Incrementa a contagem
$contagemAtual++;

// Escreve o novo valor no arquivo
file_put_contents($arquivoContagem, $contagemAtual);

// Retorna o valor atual para exibição na página
echo $contagemAtual;
?>