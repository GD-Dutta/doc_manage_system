// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package appcloudservices.proxies;

public class TokenRefreshResponse
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject tokenRefreshResponseMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "AppCloudServices.TokenRefreshResponse";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		TokenType("TokenType"),
		ExpiresIn("ExpiresIn"),
		AccessToken("AccessToken"),
		IdToken("IdToken");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public TokenRefreshResponse(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "AppCloudServices.TokenRefreshResponse"));
	}

	protected TokenRefreshResponse(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject tokenRefreshResponseMendixObject)
	{
		if (tokenRefreshResponseMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("AppCloudServices.TokenRefreshResponse", tokenRefreshResponseMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a AppCloudServices.TokenRefreshResponse");

		this.tokenRefreshResponseMendixObject = tokenRefreshResponseMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'TokenRefreshResponse.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static appcloudservices.proxies.TokenRefreshResponse initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return appcloudservices.proxies.TokenRefreshResponse.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static appcloudservices.proxies.TokenRefreshResponse initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new appcloudservices.proxies.TokenRefreshResponse(context, mendixObject);
	}

	public static appcloudservices.proxies.TokenRefreshResponse load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return appcloudservices.proxies.TokenRefreshResponse.initialize(context, mendixObject);
	}

	/**
	 * Commit the changes made on this proxy object.
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of TokenType
	 */
	public final java.lang.String getTokenType()
	{
		return getTokenType(getContext());
	}

	/**
	 * @param context
	 * @return value of TokenType
	 */
	public final java.lang.String getTokenType(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.TokenType.toString());
	}

	/**
	 * Set value of TokenType
	 * @param tokentype
	 */
	public final void setTokenType(java.lang.String tokentype)
	{
		setTokenType(getContext(), tokentype);
	}

	/**
	 * Set value of TokenType
	 * @param context
	 * @param tokentype
	 */
	public final void setTokenType(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String tokentype)
	{
		getMendixObject().setValue(context, MemberNames.TokenType.toString(), tokentype);
	}

	/**
	 * @return value of ExpiresIn
	 */
	public final java.lang.Long getExpiresIn()
	{
		return getExpiresIn(getContext());
	}

	/**
	 * @param context
	 * @return value of ExpiresIn
	 */
	public final java.lang.Long getExpiresIn(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Long) getMendixObject().getValue(context, MemberNames.ExpiresIn.toString());
	}

	/**
	 * Set value of ExpiresIn
	 * @param expiresin
	 */
	public final void setExpiresIn(java.lang.Long expiresin)
	{
		setExpiresIn(getContext(), expiresin);
	}

	/**
	 * Set value of ExpiresIn
	 * @param context
	 * @param expiresin
	 */
	public final void setExpiresIn(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Long expiresin)
	{
		getMendixObject().setValue(context, MemberNames.ExpiresIn.toString(), expiresin);
	}

	/**
	 * @return value of AccessToken
	 */
	public final java.lang.String getAccessToken()
	{
		return getAccessToken(getContext());
	}

	/**
	 * @param context
	 * @return value of AccessToken
	 */
	public final java.lang.String getAccessToken(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.AccessToken.toString());
	}

	/**
	 * Set value of AccessToken
	 * @param accesstoken
	 */
	public final void setAccessToken(java.lang.String accesstoken)
	{
		setAccessToken(getContext(), accesstoken);
	}

	/**
	 * Set value of AccessToken
	 * @param context
	 * @param accesstoken
	 */
	public final void setAccessToken(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String accesstoken)
	{
		getMendixObject().setValue(context, MemberNames.AccessToken.toString(), accesstoken);
	}

	/**
	 * @return value of IdToken
	 */
	public final java.lang.String getIdToken()
	{
		return getIdToken(getContext());
	}

	/**
	 * @param context
	 * @return value of IdToken
	 */
	public final java.lang.String getIdToken(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.IdToken.toString());
	}

	/**
	 * Set value of IdToken
	 * @param idtoken
	 */
	public final void setIdToken(java.lang.String idtoken)
	{
		setIdToken(getContext(), idtoken);
	}

	/**
	 * Set value of IdToken
	 * @param context
	 * @param idtoken
	 */
	public final void setIdToken(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String idtoken)
	{
		getMendixObject().setValue(context, MemberNames.IdToken.toString(), idtoken);
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return tokenRefreshResponseMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final appcloudservices.proxies.TokenRefreshResponse that = (appcloudservices.proxies.TokenRefreshResponse) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "AppCloudServices.TokenRefreshResponse";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
