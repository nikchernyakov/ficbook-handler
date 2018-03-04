fun main(args: Array<String>) {

}

fun formatText(text: String,
                        algorithm: LineFormatAlgorithm): String {
    val stringBuilder = StringBuilder()
    text.lines().forEach { line ->
        stringBuilder.append(algorithm.formatLine(line))
    }

    return stringBuilder.toString().trimEnd('\n')
}