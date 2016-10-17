from twilio.rest import TwilioRestClient

account_sid = "ACedc0792ba1f5a92b0f7c88f5da9f6903" # Your Account SID from www.twilio.com/console
auth_token  = "890c64a8c64de4b2e1762422a8dbb9fd"  # Your Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(
    body="Hello from Python",
    to="+18126770076",     # Replace with your phone number
    from_="+1 8127838021")  # Replace with your Twilio number

print(message.sid)