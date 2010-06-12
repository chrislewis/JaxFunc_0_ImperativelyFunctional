/*
 * Things are a bit better in scala, because we can use pattern matching for
 * painless list extractions and a nice shorthand for anonymous functions.
 *
 * Chris Lewis (chris@thegodcode.net), for JaxFunc (http://www.meetup.com/JaxFunc/)
 */
object RF {
  
  def foldr[A, B](list: List[A], acc: B, f: (B, A) => B): B = list match {
    case Nil => acc
    case head :: tail => foldr(tail, f(acc, head), f)
  }
  
  def each[A](list: List[A], op: A => Unit): Unit = 
    foldr(list, Nil, (acc: List[A], a: A) => { op(a); acc })
  
  def map[A, B](list: List[A], f: A => B) =
    foldr(list, Nil, (l: List[B], a: A) => f(a) :: l)
  
  def filter[A](list: List[A], pred: A => Boolean) = 
    foldr(list, Nil, (l: List[A], a: A) => if(pred(a)) a :: l else l)
  
}
