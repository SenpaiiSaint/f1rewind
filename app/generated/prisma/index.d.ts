
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model DiscussionPost
 * 
 */
export type DiscussionPost = $Result.DefaultSelection<Prisma.$DiscussionPostPayload>
/**
 * Model FantasyPick
 * 
 */
export type FantasyPick = $Result.DefaultSelection<Prisma.$FantasyPickPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussionPost`: Exposes CRUD operations for the **DiscussionPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscussionPosts
    * const discussionPosts = await prisma.discussionPost.findMany()
    * ```
    */
  get discussionPost(): Prisma.DiscussionPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fantasyPick`: Exposes CRUD operations for the **FantasyPick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FantasyPicks
    * const fantasyPicks = await prisma.fantasyPick.findMany()
    * ```
    */
  get fantasyPick(): Prisma.FantasyPickDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Race: 'Race',
    DiscussionPost: 'DiscussionPost',
    FantasyPick: 'FantasyPick'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "race" | "discussionPost" | "fantasyPick"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      DiscussionPost: {
        payload: Prisma.$DiscussionPostPayload<ExtArgs>
        fields: Prisma.DiscussionPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>
          }
          findFirst: {
            args: Prisma.DiscussionPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>
          }
          findMany: {
            args: Prisma.DiscussionPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>[]
          }
          create: {
            args: Prisma.DiscussionPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>
          }
          createMany: {
            args: Prisma.DiscussionPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscussionPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>[]
          }
          delete: {
            args: Prisma.DiscussionPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>
          }
          update: {
            args: Prisma.DiscussionPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>
          }
          deleteMany: {
            args: Prisma.DiscussionPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscussionPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>[]
          }
          upsert: {
            args: Prisma.DiscussionPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPostPayload>
          }
          aggregate: {
            args: Prisma.DiscussionPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussionPost>
          }
          groupBy: {
            args: Prisma.DiscussionPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscussionPostCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionPostCountAggregateOutputType> | number
          }
        }
      }
      FantasyPick: {
        payload: Prisma.$FantasyPickPayload<ExtArgs>
        fields: Prisma.FantasyPickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FantasyPickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FantasyPickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>
          }
          findFirst: {
            args: Prisma.FantasyPickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FantasyPickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>
          }
          findMany: {
            args: Prisma.FantasyPickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>[]
          }
          create: {
            args: Prisma.FantasyPickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>
          }
          createMany: {
            args: Prisma.FantasyPickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FantasyPickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>[]
          }
          delete: {
            args: Prisma.FantasyPickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>
          }
          update: {
            args: Prisma.FantasyPickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>
          }
          deleteMany: {
            args: Prisma.FantasyPickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FantasyPickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FantasyPickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>[]
          }
          upsert: {
            args: Prisma.FantasyPickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FantasyPickPayload>
          }
          aggregate: {
            args: Prisma.FantasyPickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFantasyPick>
          }
          groupBy: {
            args: Prisma.FantasyPickGroupByArgs<ExtArgs>
            result: $Utils.Optional<FantasyPickGroupByOutputType>[]
          }
          count: {
            args: Prisma.FantasyPickCountArgs<ExtArgs>
            result: $Utils.Optional<FantasyPickCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    race?: RaceOmit
    discussionPost?: DiscussionPostOmit
    fantasyPick?: FantasyPickOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    picks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    picks?: boolean | UserCountOutputTypeCountPicksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FantasyPickWhereInput
  }


  /**
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    FantasyPick: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FantasyPick?: boolean | RaceCountOutputTypeCountFantasyPickArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountFantasyPickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FantasyPickWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    picks?: boolean | User$picksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    picks?: boolean | User$picksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$DiscussionPostPayload<ExtArgs>[]
      picks: Prisma.$FantasyPickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    picks<T extends User$picksArgs<ExtArgs> = {}>(args?: Subset<T, User$picksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    where?: DiscussionPostWhereInput
    orderBy?: DiscussionPostOrderByWithRelationInput | DiscussionPostOrderByWithRelationInput[]
    cursor?: DiscussionPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionPostScalarFieldEnum | DiscussionPostScalarFieldEnum[]
  }

  /**
   * User.picks
   */
  export type User$picksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    where?: FantasyPickWhereInput
    orderBy?: FantasyPickOrderByWithRelationInput | FantasyPickOrderByWithRelationInput[]
    cursor?: FantasyPickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FantasyPickScalarFieldEnum | FantasyPickScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    id: number | null
  }

  export type RaceSumAggregateOutputType = {
    id: number | null
  }

  export type RaceMinAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    videoUrl: string | null
    description: string | null
  }

  export type RaceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    videoUrl: string | null
    description: string | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    title: number
    date: number
    videoUrl: number
    description: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    id?: true
  }

  export type RaceSumAggregateInputType = {
    id?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    videoUrl?: true
    description?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    videoUrl?: true
    description?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    videoUrl?: true
    description?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: number
    title: string
    date: Date
    videoUrl: string
    description: string | null
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    videoUrl?: boolean
    description?: boolean
    FantasyPick?: boolean | Race$FantasyPickArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    videoUrl?: boolean
    description?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    videoUrl?: boolean
    description?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    videoUrl?: boolean
    description?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "videoUrl" | "description", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FantasyPick?: boolean | Race$FantasyPickArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      FantasyPick: Prisma.$FantasyPickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      date: Date
      videoUrl: string
      description: string | null
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FantasyPick<T extends Race$FantasyPickArgs<ExtArgs> = {}>(args?: Subset<T, Race$FantasyPickArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'Int'>
    readonly title: FieldRef<"Race", 'String'>
    readonly date: FieldRef<"Race", 'DateTime'>
    readonly videoUrl: FieldRef<"Race", 'String'>
    readonly description: FieldRef<"Race", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.FantasyPick
   */
  export type Race$FantasyPickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    where?: FantasyPickWhereInput
    orderBy?: FantasyPickOrderByWithRelationInput | FantasyPickOrderByWithRelationInput[]
    cursor?: FantasyPickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FantasyPickScalarFieldEnum | FantasyPickScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model DiscussionPost
   */

  export type AggregateDiscussionPost = {
    _count: DiscussionPostCountAggregateOutputType | null
    _avg: DiscussionPostAvgAggregateOutputType | null
    _sum: DiscussionPostSumAggregateOutputType | null
    _min: DiscussionPostMinAggregateOutputType | null
    _max: DiscussionPostMaxAggregateOutputType | null
  }

  export type DiscussionPostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type DiscussionPostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type DiscussionPostMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type DiscussionPostMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type DiscussionPostCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    authorId: number
    _all: number
  }


  export type DiscussionPostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type DiscussionPostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type DiscussionPostMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    authorId?: true
  }

  export type DiscussionPostMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    authorId?: true
  }

  export type DiscussionPostCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    authorId?: true
    _all?: true
  }

  export type DiscussionPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscussionPost to aggregate.
     */
    where?: DiscussionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionPosts to fetch.
     */
    orderBy?: DiscussionPostOrderByWithRelationInput | DiscussionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscussionPosts
    **/
    _count?: true | DiscussionPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscussionPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscussionPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionPostMaxAggregateInputType
  }

  export type GetDiscussionPostAggregateType<T extends DiscussionPostAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussionPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussionPost[P]>
      : GetScalarType<T[P], AggregateDiscussionPost[P]>
  }




  export type DiscussionPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionPostWhereInput
    orderBy?: DiscussionPostOrderByWithAggregationInput | DiscussionPostOrderByWithAggregationInput[]
    by: DiscussionPostScalarFieldEnum[] | DiscussionPostScalarFieldEnum
    having?: DiscussionPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionPostCountAggregateInputType | true
    _avg?: DiscussionPostAvgAggregateInputType
    _sum?: DiscussionPostSumAggregateInputType
    _min?: DiscussionPostMinAggregateInputType
    _max?: DiscussionPostMaxAggregateInputType
  }

  export type DiscussionPostGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    authorId: number
    _count: DiscussionPostCountAggregateOutputType | null
    _avg: DiscussionPostAvgAggregateOutputType | null
    _sum: DiscussionPostSumAggregateOutputType | null
    _min: DiscussionPostMinAggregateOutputType | null
    _max: DiscussionPostMaxAggregateOutputType | null
  }

  type GetDiscussionPostGroupByPayload<T extends DiscussionPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionPostGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionPostGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionPost"]>

  export type DiscussionPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionPost"]>

  export type DiscussionPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionPost"]>

  export type DiscussionPostSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    authorId?: boolean
  }

  export type DiscussionPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "authorId", ExtArgs["result"]["discussionPost"]>
  export type DiscussionPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiscussionPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiscussionPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DiscussionPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscussionPost"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      authorId: number
    }, ExtArgs["result"]["discussionPost"]>
    composites: {}
  }

  type DiscussionPostGetPayload<S extends boolean | null | undefined | DiscussionPostDefaultArgs> = $Result.GetResult<Prisma.$DiscussionPostPayload, S>

  type DiscussionPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionPostCountAggregateInputType | true
    }

  export interface DiscussionPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscussionPost'], meta: { name: 'DiscussionPost' } }
    /**
     * Find zero or one DiscussionPost that matches the filter.
     * @param {DiscussionPostFindUniqueArgs} args - Arguments to find a DiscussionPost
     * @example
     * // Get one DiscussionPost
     * const discussionPost = await prisma.discussionPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionPostFindUniqueArgs>(args: SelectSubset<T, DiscussionPostFindUniqueArgs<ExtArgs>>): Prisma__DiscussionPostClient<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscussionPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionPostFindUniqueOrThrowArgs} args - Arguments to find a DiscussionPost
     * @example
     * // Get one DiscussionPost
     * const discussionPost = await prisma.discussionPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionPostFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionPostClient<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscussionPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionPostFindFirstArgs} args - Arguments to find a DiscussionPost
     * @example
     * // Get one DiscussionPost
     * const discussionPost = await prisma.discussionPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionPostFindFirstArgs>(args?: SelectSubset<T, DiscussionPostFindFirstArgs<ExtArgs>>): Prisma__DiscussionPostClient<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscussionPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionPostFindFirstOrThrowArgs} args - Arguments to find a DiscussionPost
     * @example
     * // Get one DiscussionPost
     * const discussionPost = await prisma.discussionPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionPostFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionPostClient<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscussionPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscussionPosts
     * const discussionPosts = await prisma.discussionPost.findMany()
     * 
     * // Get first 10 DiscussionPosts
     * const discussionPosts = await prisma.discussionPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discussionPostWithIdOnly = await prisma.discussionPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscussionPostFindManyArgs>(args?: SelectSubset<T, DiscussionPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscussionPost.
     * @param {DiscussionPostCreateArgs} args - Arguments to create a DiscussionPost.
     * @example
     * // Create one DiscussionPost
     * const DiscussionPost = await prisma.discussionPost.create({
     *   data: {
     *     // ... data to create a DiscussionPost
     *   }
     * })
     * 
     */
    create<T extends DiscussionPostCreateArgs>(args: SelectSubset<T, DiscussionPostCreateArgs<ExtArgs>>): Prisma__DiscussionPostClient<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscussionPosts.
     * @param {DiscussionPostCreateManyArgs} args - Arguments to create many DiscussionPosts.
     * @example
     * // Create many DiscussionPosts
     * const discussionPost = await prisma.discussionPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionPostCreateManyArgs>(args?: SelectSubset<T, DiscussionPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscussionPosts and returns the data saved in the database.
     * @param {DiscussionPostCreateManyAndReturnArgs} args - Arguments to create many DiscussionPosts.
     * @example
     * // Create many DiscussionPosts
     * const discussionPost = await prisma.discussionPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscussionPosts and only return the `id`
     * const discussionPostWithIdOnly = await prisma.discussionPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscussionPostCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscussionPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscussionPost.
     * @param {DiscussionPostDeleteArgs} args - Arguments to delete one DiscussionPost.
     * @example
     * // Delete one DiscussionPost
     * const DiscussionPost = await prisma.discussionPost.delete({
     *   where: {
     *     // ... filter to delete one DiscussionPost
     *   }
     * })
     * 
     */
    delete<T extends DiscussionPostDeleteArgs>(args: SelectSubset<T, DiscussionPostDeleteArgs<ExtArgs>>): Prisma__DiscussionPostClient<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscussionPost.
     * @param {DiscussionPostUpdateArgs} args - Arguments to update one DiscussionPost.
     * @example
     * // Update one DiscussionPost
     * const discussionPost = await prisma.discussionPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionPostUpdateArgs>(args: SelectSubset<T, DiscussionPostUpdateArgs<ExtArgs>>): Prisma__DiscussionPostClient<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscussionPosts.
     * @param {DiscussionPostDeleteManyArgs} args - Arguments to filter DiscussionPosts to delete.
     * @example
     * // Delete a few DiscussionPosts
     * const { count } = await prisma.discussionPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionPostDeleteManyArgs>(args?: SelectSubset<T, DiscussionPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscussionPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscussionPosts
     * const discussionPost = await prisma.discussionPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionPostUpdateManyArgs>(args: SelectSubset<T, DiscussionPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscussionPosts and returns the data updated in the database.
     * @param {DiscussionPostUpdateManyAndReturnArgs} args - Arguments to update many DiscussionPosts.
     * @example
     * // Update many DiscussionPosts
     * const discussionPost = await prisma.discussionPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscussionPosts and only return the `id`
     * const discussionPostWithIdOnly = await prisma.discussionPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscussionPostUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscussionPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscussionPost.
     * @param {DiscussionPostUpsertArgs} args - Arguments to update or create a DiscussionPost.
     * @example
     * // Update or create a DiscussionPost
     * const discussionPost = await prisma.discussionPost.upsert({
     *   create: {
     *     // ... data to create a DiscussionPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscussionPost we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionPostUpsertArgs>(args: SelectSubset<T, DiscussionPostUpsertArgs<ExtArgs>>): Prisma__DiscussionPostClient<$Result.GetResult<Prisma.$DiscussionPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscussionPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionPostCountArgs} args - Arguments to filter DiscussionPosts to count.
     * @example
     * // Count the number of DiscussionPosts
     * const count = await prisma.discussionPost.count({
     *   where: {
     *     // ... the filter for the DiscussionPosts we want to count
     *   }
     * })
    **/
    count<T extends DiscussionPostCountArgs>(
      args?: Subset<T, DiscussionPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscussionPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscussionPostAggregateArgs>(args: Subset<T, DiscussionPostAggregateArgs>): Prisma.PrismaPromise<GetDiscussionPostAggregateType<T>>

    /**
     * Group by DiscussionPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscussionPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionPostGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscussionPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscussionPost model
   */
  readonly fields: DiscussionPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscussionPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscussionPost model
   */
  interface DiscussionPostFieldRefs {
    readonly id: FieldRef<"DiscussionPost", 'Int'>
    readonly content: FieldRef<"DiscussionPost", 'String'>
    readonly createdAt: FieldRef<"DiscussionPost", 'DateTime'>
    readonly authorId: FieldRef<"DiscussionPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DiscussionPost findUnique
   */
  export type DiscussionPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionPost to fetch.
     */
    where: DiscussionPostWhereUniqueInput
  }

  /**
   * DiscussionPost findUniqueOrThrow
   */
  export type DiscussionPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionPost to fetch.
     */
    where: DiscussionPostWhereUniqueInput
  }

  /**
   * DiscussionPost findFirst
   */
  export type DiscussionPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionPost to fetch.
     */
    where?: DiscussionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionPosts to fetch.
     */
    orderBy?: DiscussionPostOrderByWithRelationInput | DiscussionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscussionPosts.
     */
    cursor?: DiscussionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscussionPosts.
     */
    distinct?: DiscussionPostScalarFieldEnum | DiscussionPostScalarFieldEnum[]
  }

  /**
   * DiscussionPost findFirstOrThrow
   */
  export type DiscussionPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionPost to fetch.
     */
    where?: DiscussionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionPosts to fetch.
     */
    orderBy?: DiscussionPostOrderByWithRelationInput | DiscussionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscussionPosts.
     */
    cursor?: DiscussionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscussionPosts.
     */
    distinct?: DiscussionPostScalarFieldEnum | DiscussionPostScalarFieldEnum[]
  }

  /**
   * DiscussionPost findMany
   */
  export type DiscussionPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionPosts to fetch.
     */
    where?: DiscussionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionPosts to fetch.
     */
    orderBy?: DiscussionPostOrderByWithRelationInput | DiscussionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscussionPosts.
     */
    cursor?: DiscussionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionPosts.
     */
    skip?: number
    distinct?: DiscussionPostScalarFieldEnum | DiscussionPostScalarFieldEnum[]
  }

  /**
   * DiscussionPost create
   */
  export type DiscussionPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscussionPost.
     */
    data: XOR<DiscussionPostCreateInput, DiscussionPostUncheckedCreateInput>
  }

  /**
   * DiscussionPost createMany
   */
  export type DiscussionPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscussionPosts.
     */
    data: DiscussionPostCreateManyInput | DiscussionPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscussionPost createManyAndReturn
   */
  export type DiscussionPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * The data used to create many DiscussionPosts.
     */
    data: DiscussionPostCreateManyInput | DiscussionPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscussionPost update
   */
  export type DiscussionPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscussionPost.
     */
    data: XOR<DiscussionPostUpdateInput, DiscussionPostUncheckedUpdateInput>
    /**
     * Choose, which DiscussionPost to update.
     */
    where: DiscussionPostWhereUniqueInput
  }

  /**
   * DiscussionPost updateMany
   */
  export type DiscussionPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscussionPosts.
     */
    data: XOR<DiscussionPostUpdateManyMutationInput, DiscussionPostUncheckedUpdateManyInput>
    /**
     * Filter which DiscussionPosts to update
     */
    where?: DiscussionPostWhereInput
    /**
     * Limit how many DiscussionPosts to update.
     */
    limit?: number
  }

  /**
   * DiscussionPost updateManyAndReturn
   */
  export type DiscussionPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * The data used to update DiscussionPosts.
     */
    data: XOR<DiscussionPostUpdateManyMutationInput, DiscussionPostUncheckedUpdateManyInput>
    /**
     * Filter which DiscussionPosts to update
     */
    where?: DiscussionPostWhereInput
    /**
     * Limit how many DiscussionPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscussionPost upsert
   */
  export type DiscussionPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscussionPost to update in case it exists.
     */
    where: DiscussionPostWhereUniqueInput
    /**
     * In case the DiscussionPost found by the `where` argument doesn't exist, create a new DiscussionPost with this data.
     */
    create: XOR<DiscussionPostCreateInput, DiscussionPostUncheckedCreateInput>
    /**
     * In case the DiscussionPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionPostUpdateInput, DiscussionPostUncheckedUpdateInput>
  }

  /**
   * DiscussionPost delete
   */
  export type DiscussionPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
    /**
     * Filter which DiscussionPost to delete.
     */
    where: DiscussionPostWhereUniqueInput
  }

  /**
   * DiscussionPost deleteMany
   */
  export type DiscussionPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscussionPosts to delete
     */
    where?: DiscussionPostWhereInput
    /**
     * Limit how many DiscussionPosts to delete.
     */
    limit?: number
  }

  /**
   * DiscussionPost without action
   */
  export type DiscussionPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionPost
     */
    select?: DiscussionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionPost
     */
    omit?: DiscussionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionPostInclude<ExtArgs> | null
  }


  /**
   * Model FantasyPick
   */

  export type AggregateFantasyPick = {
    _count: FantasyPickCountAggregateOutputType | null
    _avg: FantasyPickAvgAggregateOutputType | null
    _sum: FantasyPickSumAggregateOutputType | null
    _min: FantasyPickMinAggregateOutputType | null
    _max: FantasyPickMaxAggregateOutputType | null
  }

  export type FantasyPickAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
  }

  export type FantasyPickSumAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
  }

  export type FantasyPickMinAggregateOutputType = {
    id: number | null
    pick: string | null
    createdAt: Date | null
    userId: number | null
    raceId: number | null
  }

  export type FantasyPickMaxAggregateOutputType = {
    id: number | null
    pick: string | null
    createdAt: Date | null
    userId: number | null
    raceId: number | null
  }

  export type FantasyPickCountAggregateOutputType = {
    id: number
    pick: number
    createdAt: number
    userId: number
    raceId: number
    _all: number
  }


  export type FantasyPickAvgAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
  }

  export type FantasyPickSumAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
  }

  export type FantasyPickMinAggregateInputType = {
    id?: true
    pick?: true
    createdAt?: true
    userId?: true
    raceId?: true
  }

  export type FantasyPickMaxAggregateInputType = {
    id?: true
    pick?: true
    createdAt?: true
    userId?: true
    raceId?: true
  }

  export type FantasyPickCountAggregateInputType = {
    id?: true
    pick?: true
    createdAt?: true
    userId?: true
    raceId?: true
    _all?: true
  }

  export type FantasyPickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FantasyPick to aggregate.
     */
    where?: FantasyPickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FantasyPicks to fetch.
     */
    orderBy?: FantasyPickOrderByWithRelationInput | FantasyPickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FantasyPickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FantasyPicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FantasyPicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FantasyPicks
    **/
    _count?: true | FantasyPickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FantasyPickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FantasyPickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FantasyPickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FantasyPickMaxAggregateInputType
  }

  export type GetFantasyPickAggregateType<T extends FantasyPickAggregateArgs> = {
        [P in keyof T & keyof AggregateFantasyPick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFantasyPick[P]>
      : GetScalarType<T[P], AggregateFantasyPick[P]>
  }




  export type FantasyPickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FantasyPickWhereInput
    orderBy?: FantasyPickOrderByWithAggregationInput | FantasyPickOrderByWithAggregationInput[]
    by: FantasyPickScalarFieldEnum[] | FantasyPickScalarFieldEnum
    having?: FantasyPickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FantasyPickCountAggregateInputType | true
    _avg?: FantasyPickAvgAggregateInputType
    _sum?: FantasyPickSumAggregateInputType
    _min?: FantasyPickMinAggregateInputType
    _max?: FantasyPickMaxAggregateInputType
  }

  export type FantasyPickGroupByOutputType = {
    id: number
    pick: string
    createdAt: Date
    userId: number
    raceId: number
    _count: FantasyPickCountAggregateOutputType | null
    _avg: FantasyPickAvgAggregateOutputType | null
    _sum: FantasyPickSumAggregateOutputType | null
    _min: FantasyPickMinAggregateOutputType | null
    _max: FantasyPickMaxAggregateOutputType | null
  }

  type GetFantasyPickGroupByPayload<T extends FantasyPickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FantasyPickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FantasyPickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FantasyPickGroupByOutputType[P]>
            : GetScalarType<T[P], FantasyPickGroupByOutputType[P]>
        }
      >
    >


  export type FantasyPickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pick?: boolean
    createdAt?: boolean
    userId?: boolean
    raceId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fantasyPick"]>

  export type FantasyPickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pick?: boolean
    createdAt?: boolean
    userId?: boolean
    raceId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fantasyPick"]>

  export type FantasyPickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pick?: boolean
    createdAt?: boolean
    userId?: boolean
    raceId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fantasyPick"]>

  export type FantasyPickSelectScalar = {
    id?: boolean
    pick?: boolean
    createdAt?: boolean
    userId?: boolean
    raceId?: boolean
  }

  export type FantasyPickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pick" | "createdAt" | "userId" | "raceId", ExtArgs["result"]["fantasyPick"]>
  export type FantasyPickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FantasyPickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FantasyPickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FantasyPickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FantasyPick"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pick: string
      createdAt: Date
      userId: number
      raceId: number
    }, ExtArgs["result"]["fantasyPick"]>
    composites: {}
  }

  type FantasyPickGetPayload<S extends boolean | null | undefined | FantasyPickDefaultArgs> = $Result.GetResult<Prisma.$FantasyPickPayload, S>

  type FantasyPickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FantasyPickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FantasyPickCountAggregateInputType | true
    }

  export interface FantasyPickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FantasyPick'], meta: { name: 'FantasyPick' } }
    /**
     * Find zero or one FantasyPick that matches the filter.
     * @param {FantasyPickFindUniqueArgs} args - Arguments to find a FantasyPick
     * @example
     * // Get one FantasyPick
     * const fantasyPick = await prisma.fantasyPick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FantasyPickFindUniqueArgs>(args: SelectSubset<T, FantasyPickFindUniqueArgs<ExtArgs>>): Prisma__FantasyPickClient<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FantasyPick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FantasyPickFindUniqueOrThrowArgs} args - Arguments to find a FantasyPick
     * @example
     * // Get one FantasyPick
     * const fantasyPick = await prisma.fantasyPick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FantasyPickFindUniqueOrThrowArgs>(args: SelectSubset<T, FantasyPickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FantasyPickClient<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FantasyPick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FantasyPickFindFirstArgs} args - Arguments to find a FantasyPick
     * @example
     * // Get one FantasyPick
     * const fantasyPick = await prisma.fantasyPick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FantasyPickFindFirstArgs>(args?: SelectSubset<T, FantasyPickFindFirstArgs<ExtArgs>>): Prisma__FantasyPickClient<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FantasyPick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FantasyPickFindFirstOrThrowArgs} args - Arguments to find a FantasyPick
     * @example
     * // Get one FantasyPick
     * const fantasyPick = await prisma.fantasyPick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FantasyPickFindFirstOrThrowArgs>(args?: SelectSubset<T, FantasyPickFindFirstOrThrowArgs<ExtArgs>>): Prisma__FantasyPickClient<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FantasyPicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FantasyPickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FantasyPicks
     * const fantasyPicks = await prisma.fantasyPick.findMany()
     * 
     * // Get first 10 FantasyPicks
     * const fantasyPicks = await prisma.fantasyPick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fantasyPickWithIdOnly = await prisma.fantasyPick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FantasyPickFindManyArgs>(args?: SelectSubset<T, FantasyPickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FantasyPick.
     * @param {FantasyPickCreateArgs} args - Arguments to create a FantasyPick.
     * @example
     * // Create one FantasyPick
     * const FantasyPick = await prisma.fantasyPick.create({
     *   data: {
     *     // ... data to create a FantasyPick
     *   }
     * })
     * 
     */
    create<T extends FantasyPickCreateArgs>(args: SelectSubset<T, FantasyPickCreateArgs<ExtArgs>>): Prisma__FantasyPickClient<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FantasyPicks.
     * @param {FantasyPickCreateManyArgs} args - Arguments to create many FantasyPicks.
     * @example
     * // Create many FantasyPicks
     * const fantasyPick = await prisma.fantasyPick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FantasyPickCreateManyArgs>(args?: SelectSubset<T, FantasyPickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FantasyPicks and returns the data saved in the database.
     * @param {FantasyPickCreateManyAndReturnArgs} args - Arguments to create many FantasyPicks.
     * @example
     * // Create many FantasyPicks
     * const fantasyPick = await prisma.fantasyPick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FantasyPicks and only return the `id`
     * const fantasyPickWithIdOnly = await prisma.fantasyPick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FantasyPickCreateManyAndReturnArgs>(args?: SelectSubset<T, FantasyPickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FantasyPick.
     * @param {FantasyPickDeleteArgs} args - Arguments to delete one FantasyPick.
     * @example
     * // Delete one FantasyPick
     * const FantasyPick = await prisma.fantasyPick.delete({
     *   where: {
     *     // ... filter to delete one FantasyPick
     *   }
     * })
     * 
     */
    delete<T extends FantasyPickDeleteArgs>(args: SelectSubset<T, FantasyPickDeleteArgs<ExtArgs>>): Prisma__FantasyPickClient<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FantasyPick.
     * @param {FantasyPickUpdateArgs} args - Arguments to update one FantasyPick.
     * @example
     * // Update one FantasyPick
     * const fantasyPick = await prisma.fantasyPick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FantasyPickUpdateArgs>(args: SelectSubset<T, FantasyPickUpdateArgs<ExtArgs>>): Prisma__FantasyPickClient<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FantasyPicks.
     * @param {FantasyPickDeleteManyArgs} args - Arguments to filter FantasyPicks to delete.
     * @example
     * // Delete a few FantasyPicks
     * const { count } = await prisma.fantasyPick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FantasyPickDeleteManyArgs>(args?: SelectSubset<T, FantasyPickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FantasyPicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FantasyPickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FantasyPicks
     * const fantasyPick = await prisma.fantasyPick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FantasyPickUpdateManyArgs>(args: SelectSubset<T, FantasyPickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FantasyPicks and returns the data updated in the database.
     * @param {FantasyPickUpdateManyAndReturnArgs} args - Arguments to update many FantasyPicks.
     * @example
     * // Update many FantasyPicks
     * const fantasyPick = await prisma.fantasyPick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FantasyPicks and only return the `id`
     * const fantasyPickWithIdOnly = await prisma.fantasyPick.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FantasyPickUpdateManyAndReturnArgs>(args: SelectSubset<T, FantasyPickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FantasyPick.
     * @param {FantasyPickUpsertArgs} args - Arguments to update or create a FantasyPick.
     * @example
     * // Update or create a FantasyPick
     * const fantasyPick = await prisma.fantasyPick.upsert({
     *   create: {
     *     // ... data to create a FantasyPick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FantasyPick we want to update
     *   }
     * })
     */
    upsert<T extends FantasyPickUpsertArgs>(args: SelectSubset<T, FantasyPickUpsertArgs<ExtArgs>>): Prisma__FantasyPickClient<$Result.GetResult<Prisma.$FantasyPickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FantasyPicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FantasyPickCountArgs} args - Arguments to filter FantasyPicks to count.
     * @example
     * // Count the number of FantasyPicks
     * const count = await prisma.fantasyPick.count({
     *   where: {
     *     // ... the filter for the FantasyPicks we want to count
     *   }
     * })
    **/
    count<T extends FantasyPickCountArgs>(
      args?: Subset<T, FantasyPickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FantasyPickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FantasyPick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FantasyPickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FantasyPickAggregateArgs>(args: Subset<T, FantasyPickAggregateArgs>): Prisma.PrismaPromise<GetFantasyPickAggregateType<T>>

    /**
     * Group by FantasyPick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FantasyPickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FantasyPickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FantasyPickGroupByArgs['orderBy'] }
        : { orderBy?: FantasyPickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FantasyPickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFantasyPickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FantasyPick model
   */
  readonly fields: FantasyPickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FantasyPick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FantasyPickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FantasyPick model
   */
  interface FantasyPickFieldRefs {
    readonly id: FieldRef<"FantasyPick", 'Int'>
    readonly pick: FieldRef<"FantasyPick", 'String'>
    readonly createdAt: FieldRef<"FantasyPick", 'DateTime'>
    readonly userId: FieldRef<"FantasyPick", 'Int'>
    readonly raceId: FieldRef<"FantasyPick", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FantasyPick findUnique
   */
  export type FantasyPickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * Filter, which FantasyPick to fetch.
     */
    where: FantasyPickWhereUniqueInput
  }

  /**
   * FantasyPick findUniqueOrThrow
   */
  export type FantasyPickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * Filter, which FantasyPick to fetch.
     */
    where: FantasyPickWhereUniqueInput
  }

  /**
   * FantasyPick findFirst
   */
  export type FantasyPickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * Filter, which FantasyPick to fetch.
     */
    where?: FantasyPickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FantasyPicks to fetch.
     */
    orderBy?: FantasyPickOrderByWithRelationInput | FantasyPickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FantasyPicks.
     */
    cursor?: FantasyPickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FantasyPicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FantasyPicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FantasyPicks.
     */
    distinct?: FantasyPickScalarFieldEnum | FantasyPickScalarFieldEnum[]
  }

  /**
   * FantasyPick findFirstOrThrow
   */
  export type FantasyPickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * Filter, which FantasyPick to fetch.
     */
    where?: FantasyPickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FantasyPicks to fetch.
     */
    orderBy?: FantasyPickOrderByWithRelationInput | FantasyPickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FantasyPicks.
     */
    cursor?: FantasyPickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FantasyPicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FantasyPicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FantasyPicks.
     */
    distinct?: FantasyPickScalarFieldEnum | FantasyPickScalarFieldEnum[]
  }

  /**
   * FantasyPick findMany
   */
  export type FantasyPickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * Filter, which FantasyPicks to fetch.
     */
    where?: FantasyPickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FantasyPicks to fetch.
     */
    orderBy?: FantasyPickOrderByWithRelationInput | FantasyPickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FantasyPicks.
     */
    cursor?: FantasyPickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FantasyPicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FantasyPicks.
     */
    skip?: number
    distinct?: FantasyPickScalarFieldEnum | FantasyPickScalarFieldEnum[]
  }

  /**
   * FantasyPick create
   */
  export type FantasyPickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * The data needed to create a FantasyPick.
     */
    data: XOR<FantasyPickCreateInput, FantasyPickUncheckedCreateInput>
  }

  /**
   * FantasyPick createMany
   */
  export type FantasyPickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FantasyPicks.
     */
    data: FantasyPickCreateManyInput | FantasyPickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FantasyPick createManyAndReturn
   */
  export type FantasyPickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * The data used to create many FantasyPicks.
     */
    data: FantasyPickCreateManyInput | FantasyPickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FantasyPick update
   */
  export type FantasyPickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * The data needed to update a FantasyPick.
     */
    data: XOR<FantasyPickUpdateInput, FantasyPickUncheckedUpdateInput>
    /**
     * Choose, which FantasyPick to update.
     */
    where: FantasyPickWhereUniqueInput
  }

  /**
   * FantasyPick updateMany
   */
  export type FantasyPickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FantasyPicks.
     */
    data: XOR<FantasyPickUpdateManyMutationInput, FantasyPickUncheckedUpdateManyInput>
    /**
     * Filter which FantasyPicks to update
     */
    where?: FantasyPickWhereInput
    /**
     * Limit how many FantasyPicks to update.
     */
    limit?: number
  }

  /**
   * FantasyPick updateManyAndReturn
   */
  export type FantasyPickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * The data used to update FantasyPicks.
     */
    data: XOR<FantasyPickUpdateManyMutationInput, FantasyPickUncheckedUpdateManyInput>
    /**
     * Filter which FantasyPicks to update
     */
    where?: FantasyPickWhereInput
    /**
     * Limit how many FantasyPicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FantasyPick upsert
   */
  export type FantasyPickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * The filter to search for the FantasyPick to update in case it exists.
     */
    where: FantasyPickWhereUniqueInput
    /**
     * In case the FantasyPick found by the `where` argument doesn't exist, create a new FantasyPick with this data.
     */
    create: XOR<FantasyPickCreateInput, FantasyPickUncheckedCreateInput>
    /**
     * In case the FantasyPick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FantasyPickUpdateInput, FantasyPickUncheckedUpdateInput>
  }

  /**
   * FantasyPick delete
   */
  export type FantasyPickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
    /**
     * Filter which FantasyPick to delete.
     */
    where: FantasyPickWhereUniqueInput
  }

  /**
   * FantasyPick deleteMany
   */
  export type FantasyPickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FantasyPicks to delete
     */
    where?: FantasyPickWhereInput
    /**
     * Limit how many FantasyPicks to delete.
     */
    limit?: number
  }

  /**
   * FantasyPick without action
   */
  export type FantasyPickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FantasyPick
     */
    select?: FantasyPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FantasyPick
     */
    omit?: FantasyPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FantasyPickInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    videoUrl: 'videoUrl',
    description: 'description'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const DiscussionPostScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    authorId: 'authorId'
  };

  export type DiscussionPostScalarFieldEnum = (typeof DiscussionPostScalarFieldEnum)[keyof typeof DiscussionPostScalarFieldEnum]


  export const FantasyPickScalarFieldEnum: {
    id: 'id',
    pick: 'pick',
    createdAt: 'createdAt',
    userId: 'userId',
    raceId: 'raceId'
  };

  export type FantasyPickScalarFieldEnum = (typeof FantasyPickScalarFieldEnum)[keyof typeof FantasyPickScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    posts?: DiscussionPostListRelationFilter
    picks?: FantasyPickListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    posts?: DiscussionPostOrderByRelationAggregateInput
    picks?: FantasyPickOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    posts?: DiscussionPostListRelationFilter
    picks?: FantasyPickListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: IntFilter<"Race"> | number
    title?: StringFilter<"Race"> | string
    date?: DateTimeFilter<"Race"> | Date | string
    videoUrl?: StringFilter<"Race"> | string
    description?: StringNullableFilter<"Race"> | string | null
    FantasyPick?: FantasyPickListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    videoUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    FantasyPick?: FantasyPickOrderByRelationAggregateInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    title?: StringFilter<"Race"> | string
    date?: DateTimeFilter<"Race"> | Date | string
    videoUrl?: StringFilter<"Race"> | string
    description?: StringNullableFilter<"Race"> | string | null
    FantasyPick?: FantasyPickListRelationFilter
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    videoUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Race"> | number
    title?: StringWithAggregatesFilter<"Race"> | string
    date?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    videoUrl?: StringWithAggregatesFilter<"Race"> | string
    description?: StringNullableWithAggregatesFilter<"Race"> | string | null
  }

  export type DiscussionPostWhereInput = {
    AND?: DiscussionPostWhereInput | DiscussionPostWhereInput[]
    OR?: DiscussionPostWhereInput[]
    NOT?: DiscussionPostWhereInput | DiscussionPostWhereInput[]
    id?: IntFilter<"DiscussionPost"> | number
    content?: StringFilter<"DiscussionPost"> | string
    createdAt?: DateTimeFilter<"DiscussionPost"> | Date | string
    authorId?: IntFilter<"DiscussionPost"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DiscussionPostOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type DiscussionPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiscussionPostWhereInput | DiscussionPostWhereInput[]
    OR?: DiscussionPostWhereInput[]
    NOT?: DiscussionPostWhereInput | DiscussionPostWhereInput[]
    content?: StringFilter<"DiscussionPost"> | string
    createdAt?: DateTimeFilter<"DiscussionPost"> | Date | string
    authorId?: IntFilter<"DiscussionPost"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DiscussionPostOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    _count?: DiscussionPostCountOrderByAggregateInput
    _avg?: DiscussionPostAvgOrderByAggregateInput
    _max?: DiscussionPostMaxOrderByAggregateInput
    _min?: DiscussionPostMinOrderByAggregateInput
    _sum?: DiscussionPostSumOrderByAggregateInput
  }

  export type DiscussionPostScalarWhereWithAggregatesInput = {
    AND?: DiscussionPostScalarWhereWithAggregatesInput | DiscussionPostScalarWhereWithAggregatesInput[]
    OR?: DiscussionPostScalarWhereWithAggregatesInput[]
    NOT?: DiscussionPostScalarWhereWithAggregatesInput | DiscussionPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiscussionPost"> | number
    content?: StringWithAggregatesFilter<"DiscussionPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DiscussionPost"> | Date | string
    authorId?: IntWithAggregatesFilter<"DiscussionPost"> | number
  }

  export type FantasyPickWhereInput = {
    AND?: FantasyPickWhereInput | FantasyPickWhereInput[]
    OR?: FantasyPickWhereInput[]
    NOT?: FantasyPickWhereInput | FantasyPickWhereInput[]
    id?: IntFilter<"FantasyPick"> | number
    pick?: StringFilter<"FantasyPick"> | string
    createdAt?: DateTimeFilter<"FantasyPick"> | Date | string
    userId?: IntFilter<"FantasyPick"> | number
    raceId?: IntFilter<"FantasyPick"> | number
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FantasyPickOrderByWithRelationInput = {
    id?: SortOrder
    pick?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    race?: RaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FantasyPickWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FantasyPickWhereInput | FantasyPickWhereInput[]
    OR?: FantasyPickWhereInput[]
    NOT?: FantasyPickWhereInput | FantasyPickWhereInput[]
    pick?: StringFilter<"FantasyPick"> | string
    createdAt?: DateTimeFilter<"FantasyPick"> | Date | string
    userId?: IntFilter<"FantasyPick"> | number
    raceId?: IntFilter<"FantasyPick"> | number
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FantasyPickOrderByWithAggregationInput = {
    id?: SortOrder
    pick?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    _count?: FantasyPickCountOrderByAggregateInput
    _avg?: FantasyPickAvgOrderByAggregateInput
    _max?: FantasyPickMaxOrderByAggregateInput
    _min?: FantasyPickMinOrderByAggregateInput
    _sum?: FantasyPickSumOrderByAggregateInput
  }

  export type FantasyPickScalarWhereWithAggregatesInput = {
    AND?: FantasyPickScalarWhereWithAggregatesInput | FantasyPickScalarWhereWithAggregatesInput[]
    OR?: FantasyPickScalarWhereWithAggregatesInput[]
    NOT?: FantasyPickScalarWhereWithAggregatesInput | FantasyPickScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FantasyPick"> | number
    pick?: StringWithAggregatesFilter<"FantasyPick"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FantasyPick"> | Date | string
    userId?: IntWithAggregatesFilter<"FantasyPick"> | number
    raceId?: IntWithAggregatesFilter<"FantasyPick"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    posts?: DiscussionPostCreateNestedManyWithoutAuthorInput
    picks?: FantasyPickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    posts?: DiscussionPostUncheckedCreateNestedManyWithoutAuthorInput
    picks?: FantasyPickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posts?: DiscussionPostUpdateManyWithoutAuthorNestedInput
    picks?: FantasyPickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posts?: DiscussionPostUncheckedUpdateManyWithoutAuthorNestedInput
    picks?: FantasyPickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type RaceCreateInput = {
    title: string
    date: Date | string
    videoUrl: string
    description?: string | null
    FantasyPick?: FantasyPickCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id?: number
    title: string
    date: Date | string
    videoUrl: string
    description?: string | null
    FantasyPick?: FantasyPickUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    FantasyPick?: FantasyPickUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    FantasyPick?: FantasyPickUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id?: number
    title: string
    date: Date | string
    videoUrl: string
    description?: string | null
  }

  export type RaceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscussionPostCreateInput = {
    content: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type DiscussionPostUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    authorId: number
  }

  export type DiscussionPostUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type DiscussionPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionPostCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    authorId: number
  }

  export type DiscussionPostUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type FantasyPickCreateInput = {
    pick: string
    createdAt?: Date | string
    race: RaceCreateNestedOneWithoutFantasyPickInput
    user: UserCreateNestedOneWithoutPicksInput
  }

  export type FantasyPickUncheckedCreateInput = {
    id?: number
    pick: string
    createdAt?: Date | string
    userId: number
    raceId: number
  }

  export type FantasyPickUpdateInput = {
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutFantasyPickNestedInput
    user?: UserUpdateOneRequiredWithoutPicksNestedInput
  }

  export type FantasyPickUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
  }

  export type FantasyPickCreateManyInput = {
    id?: number
    pick: string
    createdAt?: Date | string
    userId: number
    raceId: number
  }

  export type FantasyPickUpdateManyMutationInput = {
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FantasyPickUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DiscussionPostListRelationFilter = {
    every?: DiscussionPostWhereInput
    some?: DiscussionPostWhereInput
    none?: DiscussionPostWhereInput
  }

  export type FantasyPickListRelationFilter = {
    every?: FantasyPickWhereInput
    some?: FantasyPickWhereInput
    none?: FantasyPickWhereInput
  }

  export type DiscussionPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FantasyPickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    videoUrl?: SortOrder
    description?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    videoUrl?: SortOrder
    description?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    videoUrl?: SortOrder
    description?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DiscussionPostCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type DiscussionPostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type DiscussionPostMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type DiscussionPostMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type DiscussionPostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type RaceScalarRelationFilter = {
    is?: RaceWhereInput
    isNot?: RaceWhereInput
  }

  export type FantasyPickCountOrderByAggregateInput = {
    id?: SortOrder
    pick?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
  }

  export type FantasyPickAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
  }

  export type FantasyPickMaxOrderByAggregateInput = {
    id?: SortOrder
    pick?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
  }

  export type FantasyPickMinOrderByAggregateInput = {
    id?: SortOrder
    pick?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
  }

  export type FantasyPickSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
  }

  export type DiscussionPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DiscussionPostCreateWithoutAuthorInput, DiscussionPostUncheckedCreateWithoutAuthorInput> | DiscussionPostCreateWithoutAuthorInput[] | DiscussionPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscussionPostCreateOrConnectWithoutAuthorInput | DiscussionPostCreateOrConnectWithoutAuthorInput[]
    createMany?: DiscussionPostCreateManyAuthorInputEnvelope
    connect?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
  }

  export type FantasyPickCreateNestedManyWithoutUserInput = {
    create?: XOR<FantasyPickCreateWithoutUserInput, FantasyPickUncheckedCreateWithoutUserInput> | FantasyPickCreateWithoutUserInput[] | FantasyPickUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FantasyPickCreateOrConnectWithoutUserInput | FantasyPickCreateOrConnectWithoutUserInput[]
    createMany?: FantasyPickCreateManyUserInputEnvelope
    connect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
  }

  export type DiscussionPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DiscussionPostCreateWithoutAuthorInput, DiscussionPostUncheckedCreateWithoutAuthorInput> | DiscussionPostCreateWithoutAuthorInput[] | DiscussionPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscussionPostCreateOrConnectWithoutAuthorInput | DiscussionPostCreateOrConnectWithoutAuthorInput[]
    createMany?: DiscussionPostCreateManyAuthorInputEnvelope
    connect?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
  }

  export type FantasyPickUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FantasyPickCreateWithoutUserInput, FantasyPickUncheckedCreateWithoutUserInput> | FantasyPickCreateWithoutUserInput[] | FantasyPickUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FantasyPickCreateOrConnectWithoutUserInput | FantasyPickCreateOrConnectWithoutUserInput[]
    createMany?: FantasyPickCreateManyUserInputEnvelope
    connect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DiscussionPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DiscussionPostCreateWithoutAuthorInput, DiscussionPostUncheckedCreateWithoutAuthorInput> | DiscussionPostCreateWithoutAuthorInput[] | DiscussionPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscussionPostCreateOrConnectWithoutAuthorInput | DiscussionPostCreateOrConnectWithoutAuthorInput[]
    upsert?: DiscussionPostUpsertWithWhereUniqueWithoutAuthorInput | DiscussionPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DiscussionPostCreateManyAuthorInputEnvelope
    set?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
    disconnect?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
    delete?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
    connect?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
    update?: DiscussionPostUpdateWithWhereUniqueWithoutAuthorInput | DiscussionPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DiscussionPostUpdateManyWithWhereWithoutAuthorInput | DiscussionPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DiscussionPostScalarWhereInput | DiscussionPostScalarWhereInput[]
  }

  export type FantasyPickUpdateManyWithoutUserNestedInput = {
    create?: XOR<FantasyPickCreateWithoutUserInput, FantasyPickUncheckedCreateWithoutUserInput> | FantasyPickCreateWithoutUserInput[] | FantasyPickUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FantasyPickCreateOrConnectWithoutUserInput | FantasyPickCreateOrConnectWithoutUserInput[]
    upsert?: FantasyPickUpsertWithWhereUniqueWithoutUserInput | FantasyPickUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FantasyPickCreateManyUserInputEnvelope
    set?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    disconnect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    delete?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    connect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    update?: FantasyPickUpdateWithWhereUniqueWithoutUserInput | FantasyPickUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FantasyPickUpdateManyWithWhereWithoutUserInput | FantasyPickUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FantasyPickScalarWhereInput | FantasyPickScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiscussionPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DiscussionPostCreateWithoutAuthorInput, DiscussionPostUncheckedCreateWithoutAuthorInput> | DiscussionPostCreateWithoutAuthorInput[] | DiscussionPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscussionPostCreateOrConnectWithoutAuthorInput | DiscussionPostCreateOrConnectWithoutAuthorInput[]
    upsert?: DiscussionPostUpsertWithWhereUniqueWithoutAuthorInput | DiscussionPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DiscussionPostCreateManyAuthorInputEnvelope
    set?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
    disconnect?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
    delete?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
    connect?: DiscussionPostWhereUniqueInput | DiscussionPostWhereUniqueInput[]
    update?: DiscussionPostUpdateWithWhereUniqueWithoutAuthorInput | DiscussionPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DiscussionPostUpdateManyWithWhereWithoutAuthorInput | DiscussionPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DiscussionPostScalarWhereInput | DiscussionPostScalarWhereInput[]
  }

  export type FantasyPickUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FantasyPickCreateWithoutUserInput, FantasyPickUncheckedCreateWithoutUserInput> | FantasyPickCreateWithoutUserInput[] | FantasyPickUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FantasyPickCreateOrConnectWithoutUserInput | FantasyPickCreateOrConnectWithoutUserInput[]
    upsert?: FantasyPickUpsertWithWhereUniqueWithoutUserInput | FantasyPickUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FantasyPickCreateManyUserInputEnvelope
    set?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    disconnect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    delete?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    connect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    update?: FantasyPickUpdateWithWhereUniqueWithoutUserInput | FantasyPickUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FantasyPickUpdateManyWithWhereWithoutUserInput | FantasyPickUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FantasyPickScalarWhereInput | FantasyPickScalarWhereInput[]
  }

  export type FantasyPickCreateNestedManyWithoutRaceInput = {
    create?: XOR<FantasyPickCreateWithoutRaceInput, FantasyPickUncheckedCreateWithoutRaceInput> | FantasyPickCreateWithoutRaceInput[] | FantasyPickUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: FantasyPickCreateOrConnectWithoutRaceInput | FantasyPickCreateOrConnectWithoutRaceInput[]
    createMany?: FantasyPickCreateManyRaceInputEnvelope
    connect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
  }

  export type FantasyPickUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<FantasyPickCreateWithoutRaceInput, FantasyPickUncheckedCreateWithoutRaceInput> | FantasyPickCreateWithoutRaceInput[] | FantasyPickUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: FantasyPickCreateOrConnectWithoutRaceInput | FantasyPickCreateOrConnectWithoutRaceInput[]
    createMany?: FantasyPickCreateManyRaceInputEnvelope
    connect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FantasyPickUpdateManyWithoutRaceNestedInput = {
    create?: XOR<FantasyPickCreateWithoutRaceInput, FantasyPickUncheckedCreateWithoutRaceInput> | FantasyPickCreateWithoutRaceInput[] | FantasyPickUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: FantasyPickCreateOrConnectWithoutRaceInput | FantasyPickCreateOrConnectWithoutRaceInput[]
    upsert?: FantasyPickUpsertWithWhereUniqueWithoutRaceInput | FantasyPickUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: FantasyPickCreateManyRaceInputEnvelope
    set?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    disconnect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    delete?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    connect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    update?: FantasyPickUpdateWithWhereUniqueWithoutRaceInput | FantasyPickUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: FantasyPickUpdateManyWithWhereWithoutRaceInput | FantasyPickUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: FantasyPickScalarWhereInput | FantasyPickScalarWhereInput[]
  }

  export type FantasyPickUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<FantasyPickCreateWithoutRaceInput, FantasyPickUncheckedCreateWithoutRaceInput> | FantasyPickCreateWithoutRaceInput[] | FantasyPickUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: FantasyPickCreateOrConnectWithoutRaceInput | FantasyPickCreateOrConnectWithoutRaceInput[]
    upsert?: FantasyPickUpsertWithWhereUniqueWithoutRaceInput | FantasyPickUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: FantasyPickCreateManyRaceInputEnvelope
    set?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    disconnect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    delete?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    connect?: FantasyPickWhereUniqueInput | FantasyPickWhereUniqueInput[]
    update?: FantasyPickUpdateWithWhereUniqueWithoutRaceInput | FantasyPickUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: FantasyPickUpdateManyWithWhereWithoutRaceInput | FantasyPickUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: FantasyPickScalarWhereInput | FantasyPickScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type RaceCreateNestedOneWithoutFantasyPickInput = {
    create?: XOR<RaceCreateWithoutFantasyPickInput, RaceUncheckedCreateWithoutFantasyPickInput>
    connectOrCreate?: RaceCreateOrConnectWithoutFantasyPickInput
    connect?: RaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPicksInput = {
    create?: XOR<UserCreateWithoutPicksInput, UserUncheckedCreateWithoutPicksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPicksInput
    connect?: UserWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutFantasyPickNestedInput = {
    create?: XOR<RaceCreateWithoutFantasyPickInput, RaceUncheckedCreateWithoutFantasyPickInput>
    connectOrCreate?: RaceCreateOrConnectWithoutFantasyPickInput
    upsert?: RaceUpsertWithoutFantasyPickInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutFantasyPickInput, RaceUpdateWithoutFantasyPickInput>, RaceUncheckedUpdateWithoutFantasyPickInput>
  }

  export type UserUpdateOneRequiredWithoutPicksNestedInput = {
    create?: XOR<UserCreateWithoutPicksInput, UserUncheckedCreateWithoutPicksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPicksInput
    upsert?: UserUpsertWithoutPicksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPicksInput, UserUpdateWithoutPicksInput>, UserUncheckedUpdateWithoutPicksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DiscussionPostCreateWithoutAuthorInput = {
    content: string
    createdAt?: Date | string
  }

  export type DiscussionPostUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    createdAt?: Date | string
  }

  export type DiscussionPostCreateOrConnectWithoutAuthorInput = {
    where: DiscussionPostWhereUniqueInput
    create: XOR<DiscussionPostCreateWithoutAuthorInput, DiscussionPostUncheckedCreateWithoutAuthorInput>
  }

  export type DiscussionPostCreateManyAuthorInputEnvelope = {
    data: DiscussionPostCreateManyAuthorInput | DiscussionPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type FantasyPickCreateWithoutUserInput = {
    pick: string
    createdAt?: Date | string
    race: RaceCreateNestedOneWithoutFantasyPickInput
  }

  export type FantasyPickUncheckedCreateWithoutUserInput = {
    id?: number
    pick: string
    createdAt?: Date | string
    raceId: number
  }

  export type FantasyPickCreateOrConnectWithoutUserInput = {
    where: FantasyPickWhereUniqueInput
    create: XOR<FantasyPickCreateWithoutUserInput, FantasyPickUncheckedCreateWithoutUserInput>
  }

  export type FantasyPickCreateManyUserInputEnvelope = {
    data: FantasyPickCreateManyUserInput | FantasyPickCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiscussionPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: DiscussionPostWhereUniqueInput
    update: XOR<DiscussionPostUpdateWithoutAuthorInput, DiscussionPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<DiscussionPostCreateWithoutAuthorInput, DiscussionPostUncheckedCreateWithoutAuthorInput>
  }

  export type DiscussionPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: DiscussionPostWhereUniqueInput
    data: XOR<DiscussionPostUpdateWithoutAuthorInput, DiscussionPostUncheckedUpdateWithoutAuthorInput>
  }

  export type DiscussionPostUpdateManyWithWhereWithoutAuthorInput = {
    where: DiscussionPostScalarWhereInput
    data: XOR<DiscussionPostUpdateManyMutationInput, DiscussionPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type DiscussionPostScalarWhereInput = {
    AND?: DiscussionPostScalarWhereInput | DiscussionPostScalarWhereInput[]
    OR?: DiscussionPostScalarWhereInput[]
    NOT?: DiscussionPostScalarWhereInput | DiscussionPostScalarWhereInput[]
    id?: IntFilter<"DiscussionPost"> | number
    content?: StringFilter<"DiscussionPost"> | string
    createdAt?: DateTimeFilter<"DiscussionPost"> | Date | string
    authorId?: IntFilter<"DiscussionPost"> | number
  }

  export type FantasyPickUpsertWithWhereUniqueWithoutUserInput = {
    where: FantasyPickWhereUniqueInput
    update: XOR<FantasyPickUpdateWithoutUserInput, FantasyPickUncheckedUpdateWithoutUserInput>
    create: XOR<FantasyPickCreateWithoutUserInput, FantasyPickUncheckedCreateWithoutUserInput>
  }

  export type FantasyPickUpdateWithWhereUniqueWithoutUserInput = {
    where: FantasyPickWhereUniqueInput
    data: XOR<FantasyPickUpdateWithoutUserInput, FantasyPickUncheckedUpdateWithoutUserInput>
  }

  export type FantasyPickUpdateManyWithWhereWithoutUserInput = {
    where: FantasyPickScalarWhereInput
    data: XOR<FantasyPickUpdateManyMutationInput, FantasyPickUncheckedUpdateManyWithoutUserInput>
  }

  export type FantasyPickScalarWhereInput = {
    AND?: FantasyPickScalarWhereInput | FantasyPickScalarWhereInput[]
    OR?: FantasyPickScalarWhereInput[]
    NOT?: FantasyPickScalarWhereInput | FantasyPickScalarWhereInput[]
    id?: IntFilter<"FantasyPick"> | number
    pick?: StringFilter<"FantasyPick"> | string
    createdAt?: DateTimeFilter<"FantasyPick"> | Date | string
    userId?: IntFilter<"FantasyPick"> | number
    raceId?: IntFilter<"FantasyPick"> | number
  }

  export type FantasyPickCreateWithoutRaceInput = {
    pick: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPicksInput
  }

  export type FantasyPickUncheckedCreateWithoutRaceInput = {
    id?: number
    pick: string
    createdAt?: Date | string
    userId: number
  }

  export type FantasyPickCreateOrConnectWithoutRaceInput = {
    where: FantasyPickWhereUniqueInput
    create: XOR<FantasyPickCreateWithoutRaceInput, FantasyPickUncheckedCreateWithoutRaceInput>
  }

  export type FantasyPickCreateManyRaceInputEnvelope = {
    data: FantasyPickCreateManyRaceInput | FantasyPickCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type FantasyPickUpsertWithWhereUniqueWithoutRaceInput = {
    where: FantasyPickWhereUniqueInput
    update: XOR<FantasyPickUpdateWithoutRaceInput, FantasyPickUncheckedUpdateWithoutRaceInput>
    create: XOR<FantasyPickCreateWithoutRaceInput, FantasyPickUncheckedCreateWithoutRaceInput>
  }

  export type FantasyPickUpdateWithWhereUniqueWithoutRaceInput = {
    where: FantasyPickWhereUniqueInput
    data: XOR<FantasyPickUpdateWithoutRaceInput, FantasyPickUncheckedUpdateWithoutRaceInput>
  }

  export type FantasyPickUpdateManyWithWhereWithoutRaceInput = {
    where: FantasyPickScalarWhereInput
    data: XOR<FantasyPickUpdateManyMutationInput, FantasyPickUncheckedUpdateManyWithoutRaceInput>
  }

  export type UserCreateWithoutPostsInput = {
    name: string
    email: string
    picks?: FantasyPickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    email: string
    picks?: FantasyPickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picks?: FantasyPickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picks?: FantasyPickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaceCreateWithoutFantasyPickInput = {
    title: string
    date: Date | string
    videoUrl: string
    description?: string | null
  }

  export type RaceUncheckedCreateWithoutFantasyPickInput = {
    id?: number
    title: string
    date: Date | string
    videoUrl: string
    description?: string | null
  }

  export type RaceCreateOrConnectWithoutFantasyPickInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutFantasyPickInput, RaceUncheckedCreateWithoutFantasyPickInput>
  }

  export type UserCreateWithoutPicksInput = {
    name: string
    email: string
    posts?: DiscussionPostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPicksInput = {
    id?: number
    name: string
    email: string
    posts?: DiscussionPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPicksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPicksInput, UserUncheckedCreateWithoutPicksInput>
  }

  export type RaceUpsertWithoutFantasyPickInput = {
    update: XOR<RaceUpdateWithoutFantasyPickInput, RaceUncheckedUpdateWithoutFantasyPickInput>
    create: XOR<RaceCreateWithoutFantasyPickInput, RaceUncheckedCreateWithoutFantasyPickInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutFantasyPickInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutFantasyPickInput, RaceUncheckedUpdateWithoutFantasyPickInput>
  }

  export type RaceUpdateWithoutFantasyPickInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaceUncheckedUpdateWithoutFantasyPickInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutPicksInput = {
    update: XOR<UserUpdateWithoutPicksInput, UserUncheckedUpdateWithoutPicksInput>
    create: XOR<UserCreateWithoutPicksInput, UserUncheckedCreateWithoutPicksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPicksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPicksInput, UserUncheckedUpdateWithoutPicksInput>
  }

  export type UserUpdateWithoutPicksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posts?: DiscussionPostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPicksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posts?: DiscussionPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DiscussionPostCreateManyAuthorInput = {
    id?: number
    content: string
    createdAt?: Date | string
  }

  export type FantasyPickCreateManyUserInput = {
    id?: number
    pick: string
    createdAt?: Date | string
    raceId: number
  }

  export type DiscussionPostUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionPostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FantasyPickUpdateWithoutUserInput = {
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutFantasyPickNestedInput
  }

  export type FantasyPickUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raceId?: IntFieldUpdateOperationsInput | number
  }

  export type FantasyPickUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raceId?: IntFieldUpdateOperationsInput | number
  }

  export type FantasyPickCreateManyRaceInput = {
    id?: number
    pick: string
    createdAt?: Date | string
    userId: number
  }

  export type FantasyPickUpdateWithoutRaceInput = {
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPicksNestedInput
  }

  export type FantasyPickUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FantasyPickUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}