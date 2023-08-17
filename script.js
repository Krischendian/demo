// 获取表单元素和相关字段
const form = document.querySelector("form");
const optionRadio = document.querySelectorAll('input[name="option"]');
const hourlyRateContainer = document.getElementById("hourlyRateContainer");
const hourlyRateInput = document.getElementById("hourlyRate");

// 为选项添加事件监听器
optionRadio.forEach(radio => {
  radio.addEventListener("change", function () {
    if (this.value === "招聘") {
      hourlyRateContainer.style.display = "block";
      hourlyRateInput.setAttribute("required", true);
    } else {
      hourlyRateContainer.style.display = "none";
      hourlyRateInput.removeAttribute("required");
    }
  });
});

// 表单提交时的验证
form.addEventListener("submit", function (event) {
  const postalCodeInput = document.getElementById("postalCode");
  const postalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;

  if (!postalCodePattern.test(postalCodeInput.value)) {
    alert("请输入有效的加拿大邮政编码（例如：A1A 1A1）。");
    event.preventDefault();
    return;
  }

  // 检查其他必填字段是否为空
  const requiredInputs = form.querySelectorAll("[required]");
  for (let i = 0; i < requiredInputs.length; i++) {
    const input = requiredInputs[i];
    if (input.value.trim() === "") {
      alert("请填写所有必填字段。");
      event.preventDefault();
      return;
    }
  }
});
