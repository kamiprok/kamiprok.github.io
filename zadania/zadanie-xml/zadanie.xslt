<<<<<<< HEAD
<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" encoding="ISO-8859-2" method="html"/>

  <xsl:template match="/">
    
    <html>
      <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
body {
background-image: url("faktura.gif");
background-repeat: no-repeat;
}

.imie {
position: fixed;
top: 177px;
left: 250px;
}

.nazwisko {
position: fixed;
top: 190px;
left: 250px;
}

.miejscowosc {
position: fixed;
left: 380px;
font-size: 12px;
}

.ds {
position: fixed;
left: 380px;
font-size: 12px;
top: 21px;
}

.dw {
position: fixed;
left: 380px;
font-size: 12px;
top: 34px;
}

.slownie {
position: fixed;
font-size: 12px;
left:60px;
top: 420px;
}

.nr {
position: fixed;
font-size: 20px;
left: 270px;
top: 90px;
}

.foreach {
position: fixed;
font-size: 11px;
left: 36px;
top: 285px;
width: 510px;
height: 105px;
border: 1px solid red;
}

h1 {
font-size: 14px;
width: 200px;
}

.produkt {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 102px;
height: 20px;
border: 1px solid green;
background-color: lightyellow;
}

.pkwiu {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 41px;
height: 20px;
border: 1px solid green;
}

.jm {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 23px;
height: 20px;
border: 1px solid green;
}

.ilosc {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 28px;
height: 20px;
border: 1px solid green;
}

.cena {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 64px;
height: 20px;
border: 1px solid green;
}

.brutto {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 69px;
height: 20px;
border: 1px solid green;
}

.procentvat {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 22px;
height: 20px;
border: 1px solid green;
}

.vat {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 57px;
height: 20px;
border: 1px solid green;
}

.netto {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 62px;
height: 20px;
border: 1px solid green;
}

.razembrutto {
position: fixed;
font-size: 11px;
top: 390px;
left: 330px;
}

.razemnetto {
position: fixed;
font-size: 11px;
top: 390px;
left: 490px;
}

.dozaplaty {
position: fixed;
font-size: 11px;
top: 455px;
left: 410px;
}

.formaplatnosci {
position: fixed;
font-size: 11px;
top: 485px;
left: 90px;
}

.zaplacono {
position: fixed;
font-size: 11px;
top: 487px;
left: 220px;
}

.terminplatnosci {
position: fixed;
font-size: 11px;
top: 500px;
left: 90px;
}

.fakturewystawil {
position: fixed;
font-size: 11px;
top: 538px;
left: 120px;
}

.odebral {
position: fixed;
font-size: 11px;
top: 538px;
left: 350px;
}

</style>

      </head>

      <body>
		<div class='imie'>
			<xsl:value-of select="Dane/Osoba/Imie"/>    
		</div>

        <div class='nazwisko'>
			<xsl:value-of select="Dane/Osoba/Nazwisko"/>            
		</div>

        <div class='miejscowosc'>
			<xsl:value-of select="Dane/Osoba/Miejscowosc"/>    
		</div>

        <div class='miejscowosc'>
			<xsl:value-of select="Dane/Osoba/Miejscowosc"/>
        </div>    

		<div class='ds'>
            <xsl:value-of select="Dane/Osoba/DataSprzedazy"/>  
        </div>

        <div class='dw'>
            <xsl:value-of select="Dane/Osoba/DataWystawienia"/>  
        </div>

        <div class='slownie'>
            <xsl:value-of select="Dane/Osoba/Slownie"/>  
        </div>

        <div class='nr'>
            <xsl:value-of select="Dane/Osoba/Nr"/>  
        </div>

        <div class='foreach'>
            <xsl:for-each select='Dane/Osoba/Usluga'>
                <div class='produkt'>
                    <xsl:value-of select='NazwaUslugi'/>
                </div>
                <div class='pkwiu'>
                    <xsl:value-of select='PKWIU'/>
                </div>
                <div class='jm'>
                    <xsl:value-of select='JM'/>
                </div>
                <div class='ilosc'>
                    <xsl:value-of select='ILOSC'/>
                </div>
                <div class='cena'>
                    <xsl:value-of select='cena'/>
                </div>
                <div class='brutto'>
                    <xsl:value-of select='brutto'/>
                </div>
                <div class='procentvat'>
                    <xsl:value-of select='procentvat'/>
                </div>
                <div class='vat'>
                    <xsl:value-of select='vat'/>
                </div>
                <div class='netto'>
                    <xsl:value-of select='netto'/>
                </div>
            </xsl:for-each>
        </div>

        <div class='razembrutto'>
			<xsl:value-of select="Dane/Osoba/RazemBrutto"/>    
		</div>

        <div class='razemnetto'>
			<xsl:value-of select="Dane/Osoba/RazemNetto"/>    
		</div>

        <div class='dozaplaty'>
			<xsl:value-of select="Dane/Osoba/DoZaplaty"/>    
		</div>

        <div class='formaplatnosci'>
			<xsl:value-of select="Dane/Osoba/FormaPlatnosci"/>    
		</div>

        <div class='zaplacono'>
			<xsl:value-of select="Dane/Osoba/Zaplacono"/>    
		</div>

        <div class='terminplatnosci'>
			<xsl:value-of select="Dane/Osoba/TerminPlatnosci"/>    
		</div>

        <div class='fakturewystawil'>
			<xsl:value-of select="Dane/Osoba/FaktureWystawil"/>    
		</div>

        <div class='odebral'>
			<xsl:value-of select="Dane/Osoba/Odebral"/>    
		</div>

    </body>
 </html>

  </xsl:template>
</xsl:stylesheet>

=======
<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" encoding="ISO-8859-2" method="html"/>

  <xsl:template match="/">
    
    <html>
      <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
body {
background-image: url("faktura.gif");
background-repeat: no-repeat;
}

.imie {
position: fixed;
top: 177px;
left: 250px;
}

.nazwisko {
position: fixed;
top: 190px;
left: 250px;
}

.miejscowosc {
position: fixed;
left: 380px;
font-size: 12px;
}

.ds {
position: fixed;
left: 380px;
font-size: 12px;
top: 21px;
}

.dw {
position: fixed;
left: 380px;
font-size: 12px;
top: 34px;
}

.slownie {
position: fixed;
font-size: 12px;
left:60px;
top: 420px;
}

.nr {
position: fixed;
font-size: 20px;
left: 270px;
top: 90px;
}

.foreach {
position: fixed;
font-size: 11px;
left: 36px;
top: 285px;
width: 510px;
height: 105px;
border: 1px solid red;
}

h1 {
font-size: 14px;
width: 200px;
}

.produkt {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 102px;
height: 20px;
border: 1px solid green;
background-color: lightyellow;
}

.pkwiu {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 41px;
height: 20px;
border: 1px solid green;
}

.jm {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 23px;
height: 20px;
border: 1px solid green;
}

.ilosc {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 28px;
height: 20px;
border: 1px solid green;
}

.cena {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 64px;
height: 20px;
border: 1px solid green;
}

.brutto {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 69px;
height: 20px;
border: 1px solid green;
}

.procentvat {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 22px;
height: 20px;
border: 1px solid green;
}

.vat {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 57px;
height: 20px;
border: 1px solid green;
}

.netto {
display: inline-block;
padding: 0px;
margin: 0px;
overflow: hidden;
font-size: 11px;
width: 62px;
height: 20px;
border: 1px solid green;
}

.razembrutto {
position: fixed;
font-size: 11px;
top: 390px;
left: 330px;
}

.razemnetto {
position: fixed;
font-size: 11px;
top: 390px;
left: 490px;
}

.dozaplaty {
position: fixed;
font-size: 11px;
top: 455px;
left: 410px;
}

.formaplatnosci {
position: fixed;
font-size: 11px;
top: 485px;
left: 90px;
}

.zaplacono {
position: fixed;
font-size: 11px;
top: 487px;
left: 220px;
}

.terminplatnosci {
position: fixed;
font-size: 11px;
top: 500px;
left: 90px;
}

.fakturewystawil {
position: fixed;
font-size: 11px;
top: 538px;
left: 120px;
}

.odebral {
position: fixed;
font-size: 11px;
top: 538px;
left: 350px;
}

</style>

      </head>

      <body>
		<div class='imie'>
			<xsl:value-of select="Dane/Osoba/Imie"/>    
		</div>

        <div class='nazwisko'>
			<xsl:value-of select="Dane/Osoba/Nazwisko"/>            
		</div>

        <div class='miejscowosc'>
			<xsl:value-of select="Dane/Osoba/Miejscowosc"/>    
		</div>

        <div class='miejscowosc'>
			<xsl:value-of select="Dane/Osoba/Miejscowosc"/>
        </div>    

		<div class='ds'>
            <xsl:value-of select="Dane/Osoba/DataSprzedazy"/>  
        </div>

        <div class='dw'>
            <xsl:value-of select="Dane/Osoba/DataWystawienia"/>  
        </div>

        <div class='slownie'>
            <xsl:value-of select="Dane/Osoba/Slownie"/>  
        </div>

        <div class='nr'>
            <xsl:value-of select="Dane/Osoba/Nr"/>  
        </div>

        <div class='foreach'>
            <xsl:for-each select='Dane/Osoba/Usluga'>
                <div class='produkt'>
                    <xsl:value-of select='NazwaUslugi'/>
                </div>
                <div class='pkwiu'>
                    <xsl:value-of select='PKWIU'/>
                </div>
                <div class='jm'>
                    <xsl:value-of select='JM'/>
                </div>
                <div class='ilosc'>
                    <xsl:value-of select='ILOSC'/>
                </div>
                <div class='cena'>
                    <xsl:value-of select='cena'/>
                </div>
                <div class='brutto'>
                    <xsl:value-of select='brutto'/>
                </div>
                <div class='procentvat'>
                    <xsl:value-of select='procentvat'/>
                </div>
                <div class='vat'>
                    <xsl:value-of select='vat'/>
                </div>
                <div class='netto'>
                    <xsl:value-of select='netto'/>
                </div>
            </xsl:for-each>
        </div>

        <div class='razembrutto'>
			<xsl:value-of select="Dane/Osoba/RazemBrutto"/>    
		</div>

        <div class='razemnetto'>
			<xsl:value-of select="Dane/Osoba/RazemNetto"/>    
		</div>

        <div class='dozaplaty'>
			<xsl:value-of select="Dane/Osoba/DoZaplaty"/>    
		</div>

        <div class='formaplatnosci'>
			<xsl:value-of select="Dane/Osoba/FormaPlatnosci"/>    
		</div>

        <div class='zaplacono'>
			<xsl:value-of select="Dane/Osoba/Zaplacono"/>    
		</div>

        <div class='terminplatnosci'>
			<xsl:value-of select="Dane/Osoba/TerminPlatnosci"/>    
		</div>

        <div class='fakturewystawil'>
			<xsl:value-of select="Dane/Osoba/FaktureWystawil"/>    
		</div>

        <div class='odebral'>
			<xsl:value-of select="Dane/Osoba/Odebral"/>    
		</div>

    </body>
 </html>

  </xsl:template>
</xsl:stylesheet>

>>>>>>> 2608dd2cb7a1ef3c3711e730b5a1692b90ed9750
