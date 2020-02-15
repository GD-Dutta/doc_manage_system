// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package docmanagement.proxies;

public class Login extends docmanagement.proxies.Registration
{
	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "DocManagement.Login";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Username("Username"),
		Login_Password("Login_Password"),
		First_Name("First_Name"),
		Last_Name("Last_Name"),
		Phone_Number("Phone_Number"),
		Email("Email"),
		DOB("DOB"),
		Password("Password"),
		User_Id("User_Id"),
		Login_Registration("DocManagement.Login_Registration");

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

	public Login(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "DocManagement.Login"));
	}

	protected Login(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject loginMendixObject)
	{
		super(context, loginMendixObject);
		if (!com.mendix.core.Core.isSubClassOf("DocManagement.Login", loginMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a DocManagement.Login");
	}

	/**
	 * @deprecated Use 'Login.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static docmanagement.proxies.Login initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return docmanagement.proxies.Login.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static docmanagement.proxies.Login initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new docmanagement.proxies.Login(context, mendixObject);
	}

	public static docmanagement.proxies.Login load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return docmanagement.proxies.Login.initialize(context, mendixObject);
	}

	public static java.util.List<docmanagement.proxies.Login> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<docmanagement.proxies.Login> result = new java.util.ArrayList<docmanagement.proxies.Login>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//DocManagement.Login" + xpathConstraint))
			result.add(docmanagement.proxies.Login.initialize(context, obj));
		return result;
	}

	/**
	 * @return value of Username
	 */
	public final java.lang.String getUsername()
	{
		return getUsername(getContext());
	}

	/**
	 * @param context
	 * @return value of Username
	 */
	public final java.lang.String getUsername(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Username.toString());
	}

	/**
	 * Set value of Username
	 * @param username
	 */
	public final void setUsername(java.lang.String username)
	{
		setUsername(getContext(), username);
	}

	/**
	 * Set value of Username
	 * @param context
	 * @param username
	 */
	public final void setUsername(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String username)
	{
		getMendixObject().setValue(context, MemberNames.Username.toString(), username);
	}

	/**
	 * @return value of Login_Password
	 */
	public final java.lang.String getLogin_Password()
	{
		return getLogin_Password(getContext());
	}

	/**
	 * @param context
	 * @return value of Login_Password
	 */
	public final java.lang.String getLogin_Password(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Login_Password.toString());
	}

	/**
	 * Set value of Login_Password
	 * @param login_password
	 */
	public final void setLogin_Password(java.lang.String login_password)
	{
		setLogin_Password(getContext(), login_password);
	}

	/**
	 * Set value of Login_Password
	 * @param context
	 * @param login_password
	 */
	public final void setLogin_Password(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String login_password)
	{
		getMendixObject().setValue(context, MemberNames.Login_Password.toString(), login_password);
	}

	/**
	 * @return value of Login_Registration
	 */
	public final docmanagement.proxies.Registration getLogin_Registration() throws com.mendix.core.CoreException
	{
		return getLogin_Registration(getContext());
	}

	/**
	 * @param context
	 * @return value of Login_Registration
	 */
	public final docmanagement.proxies.Registration getLogin_Registration(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		docmanagement.proxies.Registration result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Login_Registration.toString());
		if (identifier != null)
			result = docmanagement.proxies.Registration.load(context, identifier);
		return result;
	}

	/**
	 * Set value of Login_Registration
	 * @param login_registration
	 */
	public final void setLogin_Registration(docmanagement.proxies.Registration login_registration)
	{
		setLogin_Registration(getContext(), login_registration);
	}

	/**
	 * Set value of Login_Registration
	 * @param context
	 * @param login_registration
	 */
	public final void setLogin_Registration(com.mendix.systemwideinterfaces.core.IContext context, docmanagement.proxies.Registration login_registration)
	{
		if (login_registration == null)
			getMendixObject().setValue(context, MemberNames.Login_Registration.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.Login_Registration.toString(), login_registration.getMendixObject().getId());
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final docmanagement.proxies.Login that = (docmanagement.proxies.Login) obj;
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
		return "DocManagement.Login";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Override
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}