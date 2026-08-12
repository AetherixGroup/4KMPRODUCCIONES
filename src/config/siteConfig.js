export const CONTACT_PHONE = '924 130 007';
export const CONTACT_PHONE_RAW = '924130007';
export const WHATSAPP_LINK = `https://wa.me/51${CONTACT_PHONE_RAW}`;
export const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || '';

export const sendToN8N = async (payload = {}) => {
  if (!N8N_WEBHOOK_URL) {
    return { ok: false, skipped: true, reason: 'Webhook no configurado' };
  }

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        source: '4KM Producciones',
        timestamp: new Date().toISOString(),
        ...payload
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return { ok: true, skipped: false };
  } catch (error) {
    return { ok: false, skipped: false, error };
  }
};
