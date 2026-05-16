/**
 * Enriches the session with user metadata after NLU runs.
 */
async function hook(bp, event) {
  if (!event.state.session.startTime) {
    event.state.session.startTime = new Date().toISOString()
    event.state.session.messageCount = 0
  }
  event.state.session.messageCount += 1
}
