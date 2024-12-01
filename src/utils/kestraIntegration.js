const KESTRA_API_URL = process.env.CODESPACE_NAME 
  ? `https://${process.env.CODESPACE_NAME}-8080.app.github.dev/api/v1`
  : 'http://localhost:8080/api/v1';

const KESTRA_AUTH = btoa('admin:kestra');

export const triggerKestraWorkflow = async (items) => {
  try {
    // First authenticate
    const authResponse = await fetch(`${KESTRA_API_URL}/basicAuth`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${KESTRA_AUTH}`,
        'Content-Type': 'application/json',
      },
    });

    if (!authResponse.ok) {
      throw new Error('Authentication failed');
    }

    const { token } = await authResponse.json();

    // Then trigger the workflow
    const response = await fetch(`${KESTRA_API_URL}/executions/trigger/hackfrost/expiry-notification`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: {
          EXPIRY_ITEMS: JSON.stringify(items),
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to trigger Kestra workflow');
    }

    const result = await response.json();
    console.log('Kestra workflow triggered:', result);
    return result;
  } catch (error) {
    console.error('Error triggering Kestra workflow:', error);
    throw error;
  }
};

