package system;

import com.mendix.core.actionmanagement.IActionRegistrator;

public class UserActionsRegistrar
{
  public void registerActions(IActionRegistrator registrator)
  {
    registrator.bundleComponentLoaded();
    registrator.registerUserAction(appcloudservices.actions.CreateUserWithUserProfile.class);
    registrator.registerUserAction(appcloudservices.actions.DecryptString.class);
    registrator.registerUserAction(appcloudservices.actions.EncryptString.class);
    registrator.registerUserAction(appcloudservices.actions.GenerateRandomPassword.class);
    registrator.registerUserAction(appcloudservices.actions.GetTokenEndpointURI.class);
    registrator.registerUserAction(appcloudservices.actions.InitializeUserMapper.class);
    registrator.registerUserAction(appcloudservices.actions.LogOutUser.class);
    registrator.registerUserAction(appcloudservices.actions.StartSignOnServlet.class);
    registrator.registerUserAction(appcloudservices.actions.UpdateUserWithUserProfile.class);
    registrator.registerUserAction(mendixsso.actions.CalculateOpenIDFromUUID.class);
    registrator.registerUserAction(mendixsso.actions.DecryptString.class);
    registrator.registerUserAction(mendixsso.actions.EncryptString.class);
    registrator.registerUserAction(mendixsso.actions.ExtractUUIDFromInput.class);
    registrator.registerUserAction(mendixsso.actions.FindOrCreateUserWithUserInfo.class);
    registrator.registerUserAction(mendixsso.actions.GenerateRandomPassword.class);
    registrator.registerUserAction(mendixsso.actions.GetTokenEndpointURI.class);
    registrator.registerUserAction(mendixsso.actions.GetUserInfoEndpointURI.class);
    registrator.registerUserAction(mendixsso.actions.GetUserProfileFromUserInfoJSON.class);
    registrator.registerUserAction(mendixsso.actions.InitializeUserMapper.class);
    registrator.registerUserAction(mendixsso.actions.LogOutUser.class);
    registrator.registerUserAction(mendixsso.actions.StartSignOnServlet.class);
    registrator.registerUserAction(system.actions.VerifyPassword.class);
  }
}
