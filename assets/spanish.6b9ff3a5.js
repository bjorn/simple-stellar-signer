const E="Cuenta:",A="Permitir",O="Cantidad:",T="Activo:",_="Activo A:",I="Activo B:",N="Activo que est\xE1 utilizando para pagar:",a="Autorizaci\xF3n: La cuenta est\xE1 autorizada para mantener ordenes, pero no para realizar otras transacciones",n="Autorizaci\xF3n: La cuenta est\xE1 autorizada para realizar transacciones con el activo",o="Balance ID:",R="Reenv\xEDa a:",t="Comprar:",S="Compra de activos:",c="Comprar cantidad:",e="Cancelar",s="Reclamantes:",i="Borrar banderas:",P="Conectar",r="Data:",C="Descripci\xF3n:",L="Destino:",U="Activo que recibe la cuenta de destino:",M="Cuenta del destino de la inflaci\xF3n:",D="Rechazar",d="ed25519PubpcKey:",l="Error",H="Comisi\xF3n:",m="De:",B="Ir a Conectar",G="Ir a Firmar",F="Ocultar llave",p="Umbral alto:",u="Indicio:",Y="Dominio principal:",V="Instalar",K="Est\xE1 autorizado:",W="Est\xE1 autorizado a mantener pasivos:",v="Est\xE1 habilitada la recuperaci\xF3n:",b="L\xEDmite:",z="ID del fondo de liquidez:",X="Cargando...",f="Umbral bajo:",Q="Peso maestro:",Z="Precio M\xE1ximo:",h="Cantidad M\xE1xima:",x="Cantidad m\xE1xima A:",q="Cantidad m\xE1xima B:",g="Tiempo m\xE1ximo:",y="Umbral medio:",j="Cantidad m\xEDnima del activo de destino a recibir:",k="Precio M\xEDnimo:",w="Cantidad m\xEDnima A:",J="Cantidad m\xEDnima B:",$="Tiempo m\xEDnimo:",EE="Nombre:",AE="Autorizaci\xF3n: La cuenta no est\xE1 autorizada para realizar transacciones con el activo",OE="ID de la Oferta:",TE="Operaci\xF3n:",_E="Combinar cuentas",IE="Establecer l\xEDnea de confianza",NE="Comenzar a patrocinar reservas futuras",aE="Secuencia de Reenv\xEDo",nE="Cambiar l\xEDnea de confianza",oE="Reclamar balance reclamable",RE="Recuperaci\xF3n",tE="Saldo reclamable de recuperaci\xF3n",SE="Crear Cuenta",cE="Crear saldo reclamable",eE="Crear oferta de venta pasiva",sE="Finalizar patrocinio de reservas futuras",iE="Depositar en pool de liquidez",PE="Retirar de pool de liquidez",rE="Administrar oferta de compra",CE="Gestionar datos",LE="Administrar oferta de venta",UE="Path Payment Strict Receive",ME="Path Payment Strict Send",DE="Pago",dE="Eliminar patrocinio de la cuenta",lE="Eliminar patrocinio de saldo reclamable",HE="Eliminar datos de patrocinio",mE="Eliminar el patrocinio del fondo de liquidez",BE="Eliminar patrocinio de oferta",GE="Eliminar patrocinio del firmante",FE="Eliminar patrocinio de la l\xEDnea de confianza",pE="Establecer opciones",uE="Establecer banderas de la l\xEDnea de confianza",YE="Operaci\xF3n de tipo:",VE="Ruta:",KE="preAuthTx:",WE="Precio:",vE="Llave Privada",bE="Seleccionar Wallet",zE="Vendedor:",XE="Vender:",fE="Venta de activos:",QE="Secuencia de n\xFAmeros:",ZE="Establecer banderas:",hE="sha256Hash:",xE="Mostrar llave",qE="Firmar",gE="Firma:",yE="Firmas:",jE="Firmante:",kE="Firmar transacci\xF3n con",wE="Cuenta de origen:",JE="ID Patrocinada:",$E="Balance inicial:",EA="L\xEDmites de tiempo:",AA="Transacci\xF3n:",OA="Fideicomitente:",TA="El usuario no est\xE1 conectado",_A="Peso:",IA="Lo sentimos, el XDR es inv\xE1lido",NA="Lo sentimos, no encontramos ning\xFAn XDR";var aA={ACCOUNT:E,ALLOW_TRUST:A,AMOUNT:O,ASSET:T,ASSET_A:_,ASSET_B:I,ASSET_TO_PAY:N,AUTHORIZED_TO_MAINTAIN_ORDERS:a,AUTHORIZED_TO_TRANSACT:n,BALANCE_ID:o,BUMP_TO:R,BUYING:t,BUYING_ASSET:S,BUY_AMOUNT:c,CANCEL:e,CLAIMANTS:s,CLEAR_FLAGS:i,CONNECT_WITH_PRIVATE_KEY:P,DATA:r,DESCRIPTION:C,DESTINATION:L,DESTINATION_ASSET:U,DESTINATION_INFLATION:M,DISALLOW_TRUST:D,ED5519PUBPCKEY:d,ERROR:l,FEE:H,FROM:m,GO_TO_CONNECT:B,GO_TO_SIGN:G,HIDE_KEY:F,HIGH_THRESHOLD:p,HINT:u,HOME_DOMAIN:Y,INSTALL:V,IS_AUTHORIZED:K,IS_AUTHORIZED_TO_MAINTAIN_LIABILITIES:W,IS_CLAWBACK_ENABLED:v,LIMIT:b,LIQUIDITY_POOL_ID:z,LOADING:X,LOW_THRESHOLD:f,MASTER_WEIGHT:Q,MAXIMUM_PRICE:Z,MAX_AMOUNT:h,MAX_AMOUNT_A:x,MAX_AMOUNT_B:q,MAX_TIME:g,MEDIUM_THRESHOLD:y,MINIMUM_AMOUNT_DESTINATION_ASSET:j,MINIMUM_PRICE:k,MIN_AMOUNT_A:w,MIN_AMOUNT_B:J,MIN_TIME:$,NAME:EE,NOT_AUTHORIZED_TO_TRANSACT:AE,OFFER_ID:OE,OPERATION:TE,OPERATION_ACCOUNT_MERGE:_E,OPERATION_ACCOUNT_TRUST:IE,OPERATION_BEGIN_SPONSORING_FUTURE_RESERVES:NE,OPERATION_BUMP_SEQUENCE:aE,OPERATION_CHANGE_TRUST:nE,OPERATION_CLAIM_CLAIMABLE_BALANCE:oE,OPERATION_CLAWBACK:RE,OPERATION_CLAWBACK_CLAIMABLE_BALANCE:tE,OPERATION_CREATE_ACCOUNT:SE,OPERATION_CREATE_CLAIMABLE_BALANCE:cE,OPERATION_CREATE_PASSIVE_SELL_OFFER:eE,OPERATION_END_SPONSORING_FUTURE_RESERVES:sE,OPERATION_LIQUIDITY_POOL_DEPOSIT:iE,OPERATION_LIQUIDITY_POOL_WITHDRAW:PE,OPERATION_MANAGE_BUY_OFFER:rE,OPERATION_MANAGE_DATA:CE,OPERATION_MANAGE_SELL_OFFER:LE,OPERATION_PATH_PAYMENT_STRICT_RECEIVE:UE,OPERATION_PATH_PAYMENT_STRICT_SEND:ME,OPERATION_PAYMENT:DE,OPERATION_REVOKE_ACCOUNT_SPONSORSHIP:dE,OPERATION_REVOKE_CLAIMABLE_BALANCE_SPONSORSHIP:lE,OPERATION_REVOKE_DATA_SPONSORSHIP:HE,OPERATION_REVOKE_LIQUIDITY_POOL_SPONSORSHIP:mE,OPERATION_REVOKE_OFFER_SPONSORSHIP:BE,OPERATION_REVOKE_SIGNER_SPONSORSHIP:GE,OPERATION_REVOKE_TRUSTLINE_SPONSORSHIP:FE,OPERATION_SET_OPTIONS:pE,OPERATION_SET_TRUSTLINE_FLAGS:uE,OPERATION_TYPE:YE,PATH:VE,PREAUTH_TX:KE,PRICE:WE,PRIVATE_KEY:vE,SELECT_WALLET:bE,SELLER:zE,SELLING:XE,SELLING_ASSET:fE,SEQUENCE_NUMBER:QE,SET_FLAGS:ZE,SHA256HASH:hE,SHOW_KEY:xE,SIGN:qE,SIGNATURE:gE,SIGNATURES:yE,SIGNER:jE,SIGN_TRANSACTION:kE,SOURCE_ACCOUNT:wE,SPONSORED_ID:JE,STARTING_BALANCE:$E,TIME_BOUNDS:EA,TRANSACTION:AA,TRUSTOR:OA,USER_IS_NOT_CONNECTED:TA,WEIGHT:_A,XDR_INVALID:IA,XDR_NOT_PROVIDED:NA};export{E as ACCOUNT,A as ALLOW_TRUST,O as AMOUNT,T as ASSET,_ as ASSET_A,I as ASSET_B,N as ASSET_TO_PAY,a as AUTHORIZED_TO_MAINTAIN_ORDERS,n as AUTHORIZED_TO_TRANSACT,o as BALANCE_ID,R as BUMP_TO,t as BUYING,S as BUYING_ASSET,c as BUY_AMOUNT,e as CANCEL,s as CLAIMANTS,i as CLEAR_FLAGS,P as CONNECT_WITH_PRIVATE_KEY,r as DATA,C as DESCRIPTION,L as DESTINATION,U as DESTINATION_ASSET,M as DESTINATION_INFLATION,D as DISALLOW_TRUST,d as ED5519PUBPCKEY,l as ERROR,H as FEE,m as FROM,B as GO_TO_CONNECT,G as GO_TO_SIGN,F as HIDE_KEY,p as HIGH_THRESHOLD,u as HINT,Y as HOME_DOMAIN,V as INSTALL,K as IS_AUTHORIZED,W as IS_AUTHORIZED_TO_MAINTAIN_LIABILITIES,v as IS_CLAWBACK_ENABLED,b as LIMIT,z as LIQUIDITY_POOL_ID,X as LOADING,f as LOW_THRESHOLD,Q as MASTER_WEIGHT,Z as MAXIMUM_PRICE,h as MAX_AMOUNT,x as MAX_AMOUNT_A,q as MAX_AMOUNT_B,g as MAX_TIME,y as MEDIUM_THRESHOLD,j as MINIMUM_AMOUNT_DESTINATION_ASSET,k as MINIMUM_PRICE,w as MIN_AMOUNT_A,J as MIN_AMOUNT_B,$ as MIN_TIME,EE as NAME,AE as NOT_AUTHORIZED_TO_TRANSACT,OE as OFFER_ID,TE as OPERATION,_E as OPERATION_ACCOUNT_MERGE,IE as OPERATION_ACCOUNT_TRUST,NE as OPERATION_BEGIN_SPONSORING_FUTURE_RESERVES,aE as OPERATION_BUMP_SEQUENCE,nE as OPERATION_CHANGE_TRUST,oE as OPERATION_CLAIM_CLAIMABLE_BALANCE,RE as OPERATION_CLAWBACK,tE as OPERATION_CLAWBACK_CLAIMABLE_BALANCE,SE as OPERATION_CREATE_ACCOUNT,cE as OPERATION_CREATE_CLAIMABLE_BALANCE,eE as OPERATION_CREATE_PASSIVE_SELL_OFFER,sE as OPERATION_END_SPONSORING_FUTURE_RESERVES,iE as OPERATION_LIQUIDITY_POOL_DEPOSIT,PE as OPERATION_LIQUIDITY_POOL_WITHDRAW,rE as OPERATION_MANAGE_BUY_OFFER,CE as OPERATION_MANAGE_DATA,LE as OPERATION_MANAGE_SELL_OFFER,UE as OPERATION_PATH_PAYMENT_STRICT_RECEIVE,ME as OPERATION_PATH_PAYMENT_STRICT_SEND,DE as OPERATION_PAYMENT,dE as OPERATION_REVOKE_ACCOUNT_SPONSORSHIP,lE as OPERATION_REVOKE_CLAIMABLE_BALANCE_SPONSORSHIP,HE as OPERATION_REVOKE_DATA_SPONSORSHIP,mE as OPERATION_REVOKE_LIQUIDITY_POOL_SPONSORSHIP,BE as OPERATION_REVOKE_OFFER_SPONSORSHIP,GE as OPERATION_REVOKE_SIGNER_SPONSORSHIP,FE as OPERATION_REVOKE_TRUSTLINE_SPONSORSHIP,pE as OPERATION_SET_OPTIONS,uE as OPERATION_SET_TRUSTLINE_FLAGS,YE as OPERATION_TYPE,VE as PATH,KE as PREAUTH_TX,WE as PRICE,vE as PRIVATE_KEY,bE as SELECT_WALLET,zE as SELLER,XE as SELLING,fE as SELLING_ASSET,QE as SEQUENCE_NUMBER,ZE as SET_FLAGS,hE as SHA256HASH,xE as SHOW_KEY,qE as SIGN,gE as SIGNATURE,yE as SIGNATURES,jE as SIGNER,kE as SIGN_TRANSACTION,wE as SOURCE_ACCOUNT,JE as SPONSORED_ID,$E as STARTING_BALANCE,EA as TIME_BOUNDS,AA as TRANSACTION,OA as TRUSTOR,TA as USER_IS_NOT_CONNECTED,_A as WEIGHT,IA as XDR_INVALID,NA as XDR_NOT_PROVIDED,aA as default};