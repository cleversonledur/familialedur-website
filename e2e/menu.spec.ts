import { test, expect } from "@playwright/test";

test.describe("Menu de navegação", () => {
  test("menu desktop exibe Cidadania Alemã (Como obter)", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("link", { name: "Cidadania Alemã (Como obter)" })
    ).toBeVisible();
  });

  test("menu desktop exibe dropdown História com Ledur Fest", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "História" }).hover();
    await expect(
      page.getByRole("link", { name: "Ledur Fest" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Visão Geral" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Origens na Lorena" })
    ).toBeVisible();
  });

  test("link Cidadania Alemã navega para a página correta", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Cidadania Alemã (Como obter)" }).click();
    await expect(page).toHaveURL("/cidadania-alema");
    await expect(
      page.getByRole("heading", { name: "Cidadania Alemã" })
    ).toBeVisible();
  });

  test("menu mobile exibe itens e Cidadania Alemã (Como obter)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.getByRole("button", { name: "Abrir menu" }).click();
    await expect(
      page.getByRole("link", { name: "Cidadania Alemã (Como obter)" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "História" })).toBeVisible();
  });

  test("menu mobile expande História e exibe Ledur Fest sem duplicar Visão Geral", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.getByRole("button", { name: "Abrir menu" }).click();
    await page.getByRole("button", { name: "História" }).click();
    const visaoGeralLinks = page.getByRole("link", { name: "Visão Geral" });
    await expect(visaoGeralLinks).toHaveCount(1);
    await expect(
      page.getByRole("link", { name: "Ledur Fest" })
    ).toBeVisible();
  });
});
