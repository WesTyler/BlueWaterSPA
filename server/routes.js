var apiKey       = process.env.API_KEY,
    domain       = process.env.DOMAIN,
    sender       = process.env.SENDING_EMAIL,
    recipient    = process.env.RECIPIENT_EMAIL,
    mailgun      = require('mailgun-js')({
        apiKey,
        domain
    }),
    mailcomposer = require('mailcomposer');

module.exports = function(app){
    app.post('/quote', function(req, res) {
        var quoteData = req.body.quoteData;

        var mail = mailcomposer({
            from   : sender,
            to     : recipient,
            subject: 'You have a new quote request!',
            body   : JSON.stringify(req.body),
            html   : '<html><head><style type="text/css"></style></head><body><div><h4>Name:</h4><p>' + quoteData.name + '</p><h4>Company:</h4><p>' + quoteData.company + '</p><h4>Contact Info:</h4><p>' + quoteData.email + '</p><p>' + quoteData.phone + '</p><h4>Containment and Equipment</h4><p>Equipment: ' + quoteData.equipment + '</p><p>Containment Requested:' + quoteData.containment + '</p><p>Length: ' + quoteData.length + ' ft</p><p>Width: ' + quoteData.width + ' ft</p><p>Height: ' + quoteData.height + ' ft</p><h4>Other Comments:</h4><p>' + quoteData.comments + '</p></div></body></html>'
        });

        mail.build(function(err, message) {
            var dataToSend = {
                to: recipient,
                message: message.toString('ascii')
            };

            mailgun.messages().sendMime(dataToSend, function (sendError, body) {
                if (sendError) {
                    console.log(sendError);
                    return;
                } else {
                    res.send(body);
                }
            });
        });
    });
};