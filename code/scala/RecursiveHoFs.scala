/*
 * Things are a bit better in scala, because we can use pattern matching for
 * painless list extractions and a nice shorthand for anonymous functions.
 *
 * Chris Lewis (chris@thegodcode.net), for JaxFunc (http://www.meetup.com/JaxFunc/)
 */
object RF {
  
  def foldr[A, B](f: (B, A) => B, init: B, list: List[A]): B = list match {
    case Nil => init
    case head :: tail => foldr(f, f(init, head), tail)
  }
  
  def each[A](list: List[A], op: A => Unit) = 
    foldr((init: List[A], a: A) => { op(a); init }, Nil, list)
  
  def map[A, B](list: List[A], f: A => B) =
    foldr((l: List[B], a: A) => f(a) :: l, Nil, list)
  
  def filter[A](list: List[A], pred: A => Boolean) = 
    foldr((l: List[A], a: A) => if(pred(a)) a :: l else l, Nil, list)
  
}
