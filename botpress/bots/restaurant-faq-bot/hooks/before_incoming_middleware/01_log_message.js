/**
 * Logs each incoming user message for analytics.
 * Runs before NLU processing.
 */
async function hook(bp, event) {
  if (event.type === 'text') {
    bp.logger.info(`[FAQ Bot] Incoming: "${event.preview}" | channel: ${event.channel}`)
  }
}
