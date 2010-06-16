package net.godcode.jaxfunc.zero

/**
 * An implementation of the "loan" pattern.
 *
 * Chris Lewis (chris@thegodcode.net),
 * for JaxFunc (http://www.meetup.com/JaxFunc/)
 */
object Loaner {
  
  /*
   * A structural type. In Scala, structural typing is a type-safe
   * implementation of duck typing. With structural types, methods can be
   * invoked on an object if they are present, and not only when that object
   * implements a statically known interface. Unlike dynamic languages,
   * structural types can be statically checked by the compiler.
   * 
   * Here, we define an abstract type "R" as a sturctural type supporting
   * the method "close".
   */
  type R = { def close(): Unit }
  
  /*
   * A curried function that recieves any object supporting the aforementioned
   * "close" method as its first argument. The second argument "op" is a
   * function that will recieve the first argument, so that it can perform any
   * operations (like I/O). When it returns, "close" will be called on it,
   * presumably causing it to do any resource finalization (flushing, closing,
   * etc).
   * 
   * Curried functions in Scala can be written to lexically resemble control
   * structures. We might use this function as follows:
   *
   * val r = new FileWriter("out.txt")
   * using(r) { r =>
   *   r.write("my name is chris.")
   * }
   *
   * Lastly, note the use of generics as well as the structural mixin,
   * "A with R". This says to the compiler that "res" will be any type, locally
   * known as "A", that supports all methods indicated in "R", which is our
   * structural type. This gives us lots of flexibility, compile-time safety
   * via static checking, with little noise.
   */
  def using[A, B](res: A with R)(op: A => B) = {
    try {
      op(res)
    } finally {
      res.close()
    }
  }
  
}
