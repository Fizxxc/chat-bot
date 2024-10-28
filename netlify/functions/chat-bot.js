exports.handler = async (event) => {
    const request = JSON.parse(event.body);
    const userMessage = request.message.toLowerCase();

    let responseText;

    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        responseText = 'Hello! How can I assist you today?';
    } else if (userMessage.includes('price') || userMessage.includes('cost')) {
        responseText = 'Our service plans start at $10/month. Would you like more details?';
    } else if (userMessage.includes('support') || userMessage.includes('help')) {
        responseText = 'Our support team is available 24/7. Feel free to ask here, or email support@website.com.';
    } else if (userMessage.includes('features')) {
        responseText = 'We offer various features like chatbots, custom dashboards, and more.';
    } else if (userMessage.includes('contact')) {
        responseText = 'You can reach us at contact@website.com or call +123-456-7890.';
    } else {
        responseText = 'I’m here to help! Can you provide more details?';
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ reply: responseText })
    };
};
