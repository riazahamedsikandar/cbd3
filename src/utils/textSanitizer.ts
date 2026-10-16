/**
 * Sanitizes mangled UTF-8 / ANSI characters (e.g. â€“ -> -, â€™ -> ', â€” -> -)
 * caused by Excel legacy ANSI imports/exports.
 */
export const cleanUnicodeString = (str: string = ""): string => {
  if (!str) return "";
  return str
    .replace(/â€“/g, " ")
    .replace(/â€”/g, " ")
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â/g, "")
    .replace(/[\u2013\u2014]/g, " ")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .trim();
};

/**
 * Normalizes product titles for resilient matching.
 */
export const normalizeTitleForMatching = (title: string = ""): string => {
  if (!title) return "";
  return cleanUnicodeString(title)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "") // Remove all non-alphanumeric characters
    .trim();
};

/**
 * Replaces any obsolete brand names or previous cities with:
 * "cbdsouthlaketx" / "CBD American Shaman of Southlake" / "Southlake, TX"
 */
export const sanitizeBrandText = (text: string = ""): string => {
  if (!text) return "";
  return text
    .replace(/twobudz\.com/gi, "cbdsouthlaketx.com")
    .replace(/shophurstcbd\.com/gi, "cbdsouthlaketx.com")
    .replace(/cbdhurst\.com/gi, "cbdsouthlaketx.com")
    .replace(/info@twobudz\.com/gi, "info@cbdsouthlaketx.com")
    .replace(/info@shophurstcbd\.com/gi, "info@cbdsouthlaketx.com")
    .replace(/info@cbdhurst\.com/gi, "info@cbdsouthlaketx.com")
    .replace(/twobudzcbd@gmail\.com/gi, "info@cbdsouthlaketx.com")
    .replace(/client@twobudz\.com/gi, "contact@cbdsouthlaketx.com")
    .replace(/inquiry@twobudz\.com/gi, "contact@cbdsouthlaketx.com")
    .replace(/user@twobudz\.com/gi, "user@cbdsouthlaketx.com")
    .replace(/CBD American Shaman of Hurst/gi, "CBD American Shaman of Southlake")
    .replace(/CBD American Shaman Hurst/gi, "CBD American Shaman of Southlake")
    .replace(/Hurst, TX/gi, "Southlake, TX")
    .replace(/Hurst Texas/gi, "Southlake, Texas")
    .replace(/in Hurst\b/gi, "in Southlake")
    .replace(/twobudz/gi, "CBD American Shaman of Southlake")
    .replace(/flower mound/gi, "Southlake");
};

/**
 * Cleans visible text strings (titles, category names, badges, tags)
 * so that robotic dashes (-) and underscores (_) are formatted into natural, human English.
 */
export const cleanDisplayLabel = (text: string = ""): string => {
  if (!text) return "";
  return text
    .replace(/_+/g, " ")
    .replace(/-+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};


