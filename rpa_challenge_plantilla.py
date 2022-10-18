import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import chromedriver_autoinstaller
from openpyxl import load_workbook
from openpyxl import Workbook
from openpyxl.styles import Font
import requests
from bs4 import BeautifulSoup as b
import time
import xlsxwriter


#----------------------------CONFIGURACIONES----------------------------------#

# Ruta donde se guardan los archivos descargados
RUTA_DESCARGAS = 'C:/Users/Mariana Jaramillo/Documents/Quipux/rpa challenge archivos/Mi RPA/paises.xlsx'

# Dirección del sitio web google
URL_navegador = 'https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwia86zfw-f6AhX4omoFHcrZDHMQPAgI'

CAMPO_BUSQUEDA  = 'q' # NAME del campo de busqueda

RESULTADO = 'FLP8od'


# Instalamos el navegador de chrome
chromedriver_autoinstaller.install()

# Definición de objeto que inicia y detiene el ChromeDriver
s = Service()

# Inicializar las opciones
opciones_chrome = Options()
#Para evitar que se genere en consola el error por el bluetooth bloqueado:
opciones_chrome.add_experimental_option('excludeSwitches', ['enable-logging']) 


#----------------------------INICIO----------------------------------#
# Inicializamos del chromedriver
navegador = webdriver.Chrome(service = s, options = opciones_chrome)

# Maximizamos la ventana del navegador
navegador.maximize_window()

navegador.get(URL_navegador)

datos_excel = pd.read_excel(RUTA_DESCARGAS)

#-------------------------------PROCESO----------------------------------------#

cantidad_columnas = len(datos_excel.columns) # Resultado: 1
lista_columnas = range(cantidad_columnas) # Resultado: [0]

cantidad_filas = len(datos_excel) # Resultado: 9
lista_filas = range(cantidad_filas) # Resultado: [0,1,2,3,4,5,6,7,8]

for i in lista_columnas:
    columna = datos_excel.loc[i] #Obtenemos los datos de la columna del excel
    for j in lista_filas:
        navegador.get(URL_navegador)
        datos_excel = pd.read_excel(RUTA_DESCARGAS)
        fila = datos_excel.loc[j]
        campo_texto = navegador.find_element(By.NAME, CAMPO_BUSQUEDA)
        campo_texto.send_keys("Capital de ", fila[i])
        campo_texto.send_keys(Keys.ENTER)
        resultado = navegador.find_element(By.CLASS_NAME, RESULTADO)
        print(resultado)
        




        
        
        




        
        
        
      
        

        
