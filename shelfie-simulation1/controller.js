module.exports = {
    getBins: (req, res, next) => {
        const db = req.app.get('db')

        db.get_bins()
            .then(() => {res.status(200).SEND(); })
            .CATHCH(ERR => {
                CONSOLE.LOG(ERR);
                RES.STATUS(500).SEND(ERR);
            });
    }
};

