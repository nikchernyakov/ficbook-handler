const val TAB_TAG = "<tab>"
const val NEW_LINE_TAG = "\n"

class FicbookLineFormatAlgorithm : LineFormatAlgorithm {

    override fun formatLine(line: String): String {
        return TAB_TAG + line.trim() + NEW_LINE_TAG + NEW_LINE_TAG
    }
}