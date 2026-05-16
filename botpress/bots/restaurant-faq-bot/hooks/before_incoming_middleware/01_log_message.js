/**
 * Logs incoming message metadata for analytics without storing message text.
 * Runs before NLU processing.
 */
async function hook(bp, event) {
  if (event.type === 'text') {
    bp.logger.info(`[FAQ Bot] Incoming text message | channel: ${event.channel}`)
  }
}
