import { domain } from "./domain";

async function CustomFetch(route: string, options: any): Promise<any> {
  const response = await fetch(`${domain}/${route}`, options);
  const result = await response.text();
  if (response.ok) {
    return { status: "success", msg: result };
  } else return { status: "error", msg: result };
}

export default CustomFetch;
