export const WHATSAPP_NUMBER = '62895616000434';

export function generateWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function generateProductOrderMessage(productName: string, variantName: string, price: number): string {
  const priceText = `Rp${price.toLocaleString('id-ID')}`;
  
  return `Halo Dapur Elexito, saya tertarik dengan ${productName} (${variantName}) dengan harga ${priceText}. Saya ingin melakukan pemesanan. Mohon info ketersediaannya.`;
}
