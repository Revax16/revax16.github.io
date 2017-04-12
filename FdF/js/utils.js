var utils = {
    has:function (obj, prop) {
        if (obj.hasOwnProperty(prop))
            return true;
        else
            return false;
    },
    extend:function (a, b) {
        for (var k in b) {
            if (this.has(b, k)) {
                a[k] = b[k];
            }
        }
        return a;
    },
    vector:function (x, y) {
        if (!x) x = 0;
        if (!y) y = 0;
        return {
            x:x,
            y:y,
        }
    }
}
