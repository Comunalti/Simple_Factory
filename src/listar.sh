#!/bin/bash

# Diretório a ser listado (use o diretório atual se nenhum for especificado)
DIR=${1:-.}

# Arquivo de saída
OUTPUT_FILE="arquivos_conteudo.txt"

# Apaga o arquivo de saída se já existir
> "$OUTPUT_FILE"

# Percorre todos os arquivos do diretório de forma recursiva
find "$DIR" -type f | while read -r file; do
    # Obtém o caminho relativo do arquivo
    relative_path=$(realpath --relative-to="$DIR" "$file")

    # Adiciona o caminho relativo ao arquivo de saída
    echo "Path relativo: $relative_path" >> "$OUTPUT_FILE"
    echo "----------------------------" >> "$OUTPUT_FILE"

    # Adiciona o conteúdo do arquivo ao arquivo de saída
    cat "$file" >> "$OUTPUT_FILE"
    echo -e "\n\n" >> "$OUTPUT_FILE"
done

echo "Conteúdo dos arquivos foi gerado em $OUTPUT_FILE"
