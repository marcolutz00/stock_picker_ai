
function cleanJson(json_raw: string): string {
    if(!json_raw) return "";

    let cleaned = json_raw.trim();

    const firstBracket = cleaned.indexOf("{");
    const lastBracket = cleaned.lastIndexOf("}");

    if (firstBracket !== -1 && lastBracket !== -1) {
        cleaned = cleaned.substring(firstBracket, lastBracket+1);
    }

    return cleaned.trim();
}