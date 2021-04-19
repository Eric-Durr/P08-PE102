/**
 * # Desarrollo de Array reduce mediante el patrón de diseño Template Method
 * 
 * Se propone desarrollar para esta actividad una versión de reduce mediante
 * el patrón de diseño en TypeScript Template Method, el cual permite definir 
 * un esqueleto algorítmico en una superclase que servirá de "plantilla" abstracta
 * para el desarrollo de las funcionalidades en superclases.
 * 
 * En este caso la estructura que se propone es la siguiente:
 * 
 * Reduce (Clase abstracta / plantilla)
 * |__> AddReduce
 * |__> SubReduce
 * |__> ProdReduce
 * |__> DivReduce
 * 
 * Tal y cómo se puede apreciar, la superclase Reduce, que será abstracta será
 * concretada por las clases hijas que implementan las 4 operaciones básicas esperadas
 * 
 */


export abstract class Reduce {
  
  protected valNum: number
  
  constructor(protected valuesArray: number[] , 
              protected accNum: number = 0, )
  {
    this.valNum = 0;
  }

  /**
   * ### operate template method
   * 
   * Este método define el esqueleto algorítmico que debe será empleado por las especificaciones, 
   * en esencia es lo mismo para toda las clases derivadas, pero será ejecutado con las 
   * especificaciones de los métodos particulares en cada clase
   * 
   * @returns accumulated value
   */
  public operate(): number {
    this.valuesArray.forEach( (value)=>
    {
      this.copyValue(value);
      this.computeAcc();
    });
    return this.returnACC();
  }
  
  /**
   * ### Copy value
   * Operación implementada en la propia clase esqueleto. Copia el valor extraido
   * en el atributo de valor actual.
   * 
   * @param currValue 
   */
  copyValue(currValue:number): void { this.valNum = currValue;}

  /**
   * ### Return Accumulator
   * Operación implementada en la propia clase esqueleto. Devuelve el valor alojado 
   * en el acumulador. al ser protected hay que otorgar algún tipo de seguridad de 
   * acceso a esete valor al retornarlo.
   * 
   * @param currValue 
   */
  returnACC(): number { return this.accNum;}

  /**
   * ### Compute Accumulator
   * Este método debe ser sobrecargado por las subclases.
   * 
   * Se encarga de calcular el valor del acumulador conforme a la especificación
   * de cada una de las clases hija.
   */
  protected abstract computeAcc(): void;

};

/**
 * # Clase de especificación de suma
 * La Clase AddReduce concreta el método computeAcc(), que es donde
 * se calcula el valor del acumulador, mediante una suma entre el valor
 * previo del acumulador y el valor numerico copiado actualmente 
 * 
 * Esta toma por defecto en el acumulador el valor cero
 */
export class AddReduce extends Reduce {
  
  protected valNum: number
  
  constructor(protected valuesArray: number[] , 
    protected accNum: number = 0)
  { super(valuesArray, accNum)
    this.valNum = 0;}

  protected computeAcc(): void {
    this.accNum = this.accNum + this.valNum;
  }
}


/**
 * # Clase de especificación de suma
 * La Clase AddReduce concreta el método computeAcc(), que es donde
 * se calcula el valor del acumulador, mediante una resta entre el valor
 * previo del acumulador y el valor numerico copiado actualmente 
 * 
 * Esta toma por defecto en el acumulador el valor cero 
 */
export class SubReduce extends Reduce {
  
  protected valNum: number
  
  constructor(protected valuesArray: number[] , 
    protected accNum: number = 0)
  { super(valuesArray, accNum)
    this.valNum = 0;}

  protected computeAcc(): void {
    this.accNum = this.accNum - this.valNum;
  }
}


/**
 * # Clase de especificación de multiplicación
 * La Clase ProidReduce concreta el método computeAcc(), que es donde
 * se calcula el valor del acumulador, mediante una multiplicación entre el valor
 * previo del acumulador y el valor numerico copiado actualmente.
 * 
 * Esta toma por defecto en el acumulador el valor 1
 *  
 */
export class ProdReduce extends Reduce {
  
  protected valNum: number
  
  constructor(protected valuesArray: number[] , 
    protected accNum: number = 1)
  { 
    super(valuesArray, accNum)
    this.valNum = 0;}

  protected computeAcc(): void {
    this.accNum = this.accNum * this.valNum;
  }
}


/**
 * # Clase de especificación de división
 * La Clase DivReduce concreta el método computeAcc(), que es donde
 * se calcula el valor del acumulador, mediante una división entre el valor
 * previo del acumulador y el valor numerico copiado actualmente.
 * 
 * Esta toma por defecto en el acumulador el valor de la primera variable del array 
 */
export class DivReduce extends Reduce {
  
  protected valNum: number
  
  constructor(protected valuesArray: number[] , 
    protected accNum: number = valuesArray[0])
  { 
    super(valuesArray, accNum)
    this.valNum = 0;}

  protected computeAcc(): void {
    this.accNum = this.accNum / this.valNum;
  }
}






