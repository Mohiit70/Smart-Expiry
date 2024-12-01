const KESTRA_API_URL = 'http://localhost:8080/api/v1/executions';

export const triggerKestraWorkflow = async (items) => {
  try {
    const response = await fetch(KESTRA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        namespace: 'hackfrost',
        flowId: 'expiry-notification',
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
  } catch (error) {
    console.error('Error triggering Kestra workflow:', error);
  }
};

