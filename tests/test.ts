import { expect, test } from '@playwright/test';

test.describe('index page', () => {
	test.beforeEach(async ({ page }) => {
		const url = '/';
		await page.goto(url);
	});

	test('has expected h1', async ({ page }) => {
		expect(await page.textContent('h1')).toBe('Criar meu cadastro');
	});

	test('has expected labels inside a form element', async ({ page }) => {
		const labels_xpath = '//form//label';
		const labels_inner_text = await page.locator(labels_xpath).allInnerTexts();

		expect(labels_inner_text).toStrictEqual([
			'E-mail',
			'CPF',
			'Data de nascimento',
			'Senha',
			'Li e estou de acordo com a Política de Privacidade e a Política de Uso de Informações'
		]);
	});

	test('has expected placeholders inside of labels', async ({ page }) => {
		const input_xpath = '//input[@type="text" or @type="password" or @type="email"]';
		const input_locator = page.locator(input_xpath);
		const input_count = await page.locator(input_xpath).count();

		const input_placeholders = [];
		for (let i = 0; i < input_count; i++) {
			const placeholder = await input_locator.nth(i).getAttribute('placeholder');
			input_placeholders.push(placeholder);
		}

		expect(input_placeholders).toStrictEqual([
			'ana.maria@email.com',
			'998.767.888-70',
			'21/12/1990',
			'Cadastre uma senha'
		]);
	});

	test('has expected button inside of form', async ({ page }) => {
		const button_locator = '//form//button[@type="submit"]';
		const button_inner_text = await page.locator(button_locator).innerText();

		expect(button_inner_text).toBe('Cadastrar');
	});

	test('has expected disabled button if checkbox is not checked', async ({ page }) => {
		const button_xpath = '//form//button[@type="submit"]';
		const button_disabled = await page.locator(button_xpath).isDisabled();

		expect(button_disabled).toBe(true);

		const checkbox_locator = '//form//input[@type="checkbox"]';
		await page.locator(checkbox_locator).click();

		const button_not_disabled = await page.locator(button_xpath).isDisabled();
		expect(button_not_disabled).toBe(false);
	});

	test('toast should appear after success signup', async ({ page }) => {
		await page.locator('//input[@id="email"]').fill('test-email@gmail.com');
		await page.locator('//input[@id="cpf"]').fill('01001000100');
		await page.locator('//input[@id="birth"]').fill('22051995');
		await page.locator('//input[@id="password"]').fill('test-password');
		await page.locator('//input[@id="terms"]').click();

		await page.locator('//button[@type="submit"]').click();

		const toast = await page.waitForSelector('//span[@id="successToast"]');
		const toast_visible = await toast.isVisible();

		expect(toast_visible).toBe(true);
	});
});
