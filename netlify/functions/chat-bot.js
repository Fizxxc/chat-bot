exports.handler = async (event) => {
    const request = JSON.parse(event.body);
    const userMessage = request.message.toLowerCase();

    let responseText;

    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        responseText = 'Hello! How can I assist you today?';
    } else if (userMessage.includes('info') || userMessage.includes('cost')) {
        responseText = 'Visual Communication Design (DKV) is a discipline that focuses on conveying messages or information through visual media.';
    } else if (userMessage.includes('support') || userMessage.includes('help')) {
        responseText = 'Our support team is available 24/7. You can ask me here, or email dkvmetschoo@yahoo.com for detailed assistance.';
    } else if (userMessage.includes('student')) {
        responseText = 'There are 16 DKV students at Metland School.';
    } else if (userMessage.includes('contact')) {
        responseText = 'You can contact us directly at dkvmetschoo@yahoo.com or call us at +62857-7656-8948.';
    } else if (userMessage.includes('location')) {
        responseText = 'Perum. Metland Cibitung Desa Telagamurni Kec. Cikarang Barat Kab. Bekasi Prov. Jawa Barat';
    } else {
        responseText = 'I’m here to help! Can you provide more details?';
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ reply: responseText })
    };
};
