filer = open(r'regarchivo1.csv', "r")
filew = open('reg2.csv', "w")
buff = filer.read()
rbuff = buff.replace(';\n', '\n')
pbuff = rbuff.replace('\n\n', '\n')
rbuff = pbuff.replace('Ñ', 'N')
pbuff = rbuff.replace('Á', 'A')
rbuff = pbuff.replace('É', 'E')
pbuff = rbuff.replace('Í', 'I')
rbuff = pbuff.replace('Ó', 'O')
pbuff = rbuff.replace('Ú', 'U')
rbuff = pbuff.replace('¿', '')
pbuff = rbuff.replace('ÂÂÂÂ', 'O')
rbuff = pbuff.replace('\0', '')
filew.write(rbuff)
filer.close()
filew.close()

filer = open(r'regarchivo0.csv', "r")
filew = open('reg1.csv', "w")
buff = filer.read()
rbuff = buff.replace(';\n', '\n')
pbuff = rbuff.replace('\n\n', '\n')
rbuff = pbuff.replace('Ñ', 'N')
pbuff = rbuff.replace('Á', 'A')
rbuff = pbuff.replace('É', 'E')
pbuff = rbuff.replace('Í', 'I')
rbuff = pbuff.replace('Ó', 'O')
pbuff = rbuff.replace('Ú', 'U')
rbuff = pbuff.replace('¿', '')
pbuff = rbuff.replace('ÂÂÂÂ', 'O')
rbuff = pbuff.replace('\0', '')
filew.write(rbuff)
filer.close()
filew.close()
