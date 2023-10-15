import { Construct } from "constructs";
import { App, TerraformStack, CloudBackend, NamedCloudWorkspace } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here
  }
}

const app = new App();
const stack = new MyStack(app, "cdktf");
new CloudBackend(stack, {
  hostname: "app.terraform.io",
  organization: "type8-net",
  workspaces: new NamedCloudWorkspace("sveltekit-aws-sample")
});
app.synth();
