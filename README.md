# DSI | PE102-08  

    Autor: Eric Dürr Sierra - alu0101027005@ull.edu.es
    Escuela Superior de Ingeniería y Tecnología - ULL
    ~ 24-MAR-2021

> Importante ejecutar `npm install` de antemano para instalar las posiles dependencias. 

## Enunciado:



**Desarrolle los siguientes ejercicios en un proyecto alojado en un nuevo repositorio de GitHub:**

1. Implemente la operación reduce (sin hacer uso del propio reduce proporcionado por TypeScript) mediante la implementación del patrón Template Method. Aunque el método de plantilla de la clase base contenga pocos o, incluso, un único paso, haga que dicho paso sea abstracto. Luego en las clases hijas, que podrán ser, por ejemplo, AddReduce, SubReduce, ProdReduce, DivReduce, etc., particularice esos pocos pasos haciendo uso de las operaciones correspondientes. También añada algunos métodos de enganche entre los diferentes pasos que haya definido en su método de plantilla.

2. Dado que tendrá que seguir una metodología TDD/BDD, implemente integración continua en su proyecto a través de un flujo de trabajo de GitHub Actions, esto es, con cada push realizado sobre su repositorio, ejecute las pruebas en entornos que cuenten con diferentes versiones de Node.js.

3. Dado que tendrá que medir el cubrimiento de su código fuente haciendo uso de Instanbul, implemente un flujo de trabajo de GitHub Actions que envíe la información de cubrimiento generada a Coveralls con cada push llevado a cabo sobre su repositorio.

4. Analice la calidad y seguridad del código fuente desarrollado mediante Sonar Cloud gracias a la implementación de un flujo de trabajo de GitHub Actions que se dispare con cada push llevado a cabo con su repositorio.

5. Por último, recuerde que deberá incluir la documentación de su proyecto haciendo uso de TypeDoc.



Como entrega de esta tarea deberá indicar el enlace al repositorio GitHub con los ejercicios de evaluación solicitados.

#

[![PE102 - P8 TypeScript Tests](https://github.com/Eric-Durr/P08-PE102/actions/workflows/tests.yml/badge.svg)](https://github.com/Eric-Durr/P08-PE102/actions/workflows/tests.yml)
[![PE102 - P8 code  coverage](https://github.com/Eric-Durr/P08-PE102/actions/workflows/coveralls.yml/badge.svg)](https://github.com/Eric-Durr/P08-PE102/actions/workflows/coveralls.yml)

