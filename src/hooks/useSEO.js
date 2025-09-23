import { useEffect } from 'react';

function setMetaTag(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setPropertyTag(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url) {
  if (!url) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function toAbsoluteUrl(possibleUrl) {
  if (!possibleUrl) return undefined;
  try {
    // If it's already absolute, URL() will preserve it
    return new URL(possibleUrl, window.location.origin).toString();
  } catch (_) {
    return possibleUrl;
  }
}

export default function useSEO({ title, description, image, url }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setPropertyTag('og:title', title);
      setMetaTag('twitter:title', title);
    }
    if (description) {
      setMetaTag('description', description);
      setPropertyTag('og:description', description);
      setMetaTag('twitter:description', description);
    }
    const absoluteImage = typeof window !== 'undefined' ? toAbsoluteUrl(image) : image;
    if (absoluteImage) {
      setPropertyTag('og:image', absoluteImage);
      setMetaTag('twitter:image', absoluteImage);
    }
    const absoluteUrl = typeof window !== 'undefined' ? toAbsoluteUrl(url) : url;
    if (absoluteUrl) {
      setPropertyTag('og:url', absoluteUrl);
      setCanonical(absoluteUrl);
    }
    setPropertyTag('og:type', 'website');
    setMetaTag('twitter:card', 'summary_large_image');
  }, [title, description, image, url]);
}


