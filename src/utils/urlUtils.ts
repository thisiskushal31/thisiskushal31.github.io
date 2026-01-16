// URL utility functions for the link/bio website
// All URLs use HashRouter with /#/ pattern (root deployment)

const BASE_URL = "https://thisiskushal31.github.io";

export function generateMainUrl(): string {
  return `${BASE_URL}/#/`;
}

export function generateSectionUrl(sectionId: string): string {
  return `${BASE_URL}/#/section/${sectionId}`;
}

export function generateLinkUrl(sectionId: string, linkId: string): string {
  return `${BASE_URL}/#/section/${sectionId}/link/${linkId}`;
}

export function getCurrentFullUrl(): string {
  return window.location.href;
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
