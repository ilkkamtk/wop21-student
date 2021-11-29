Choose a branch and download as zip.

# wop21-student

#### Apache settings:

`sudo nano /etc/httpd/conf.d/node.conf`

```
# change X and Y to numbers
<VirtualHost *:80>
    ProxyPreserveHost On
    ProxyPass /app/ http://127.0.0.1:300X/
    ProxyPassReverse /app/ http://127.0.0.1:300X/
    ProxyPass /front/ http://127.0.0.1:300Y/
    ProxyPassReverse /front/ http://127.0.0.1:300Y/
</VirtualHost>
```

`sudo nano /etc/httpd/conf.d/https-node.conf`

```
# change tunnus-numero and X and Y
<VirtualHost *:443>
    ServerName tunnus-numero.metropolia.fi
    SSLEngine on
    SSLCertificateFile /etc/pki/tls/certs/ca.crt
    SSLCertificateKeyFile /etc/pki/tls/private/ca.key
    SSLProxyCACertificateFile /etc/pki/tls/certs/ca.crt

    SSLProxyEngine on
    SSLProxyCheckPeerCN off
    SSLProxyCheckPeerName off
    ProxyPreserveHost On
    ProxyPass /app/ https://127.0.0.1:800X/
    ProxyPassReverse /app/ https://127.0.0.1:800Y/
    ProxyPass /front/ https://127.0.0.1:800X/
    ProxyPassReverse /front/ https://127.0.0.1:800Y/
</VirtualHost>
```

#### Add .env

```
PORT=300X
HTTPS_PORT=800X
PROXY_PASS=/app
NODE_ENV=production
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
```

#### Start pm2 without --watch. Otherwise it will reload the app every time you upload file.
