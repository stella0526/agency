document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const styleName = params.get('name');
  const styleId = params.get('style');
  if (styleId) {
    const badge = document.getElementById('styleBadgeWrap');
    badge.innerHTML = `<div class="style-badge">✨ 참고 스타일: No.${styleId}${styleName ? ' — ' + decodeURIComponent(styleName) : ''}</div>`;

    const id = parseInt(styleId, 10);
    let svcId = 'svc1';
    if (id <= 10) svcId = 'svc2';
    else if (id <= 20) svcId = 'svc1';
    else if (id <= 30) svcId = 'svc4';
    else if (id <= 38) svcId = 'svc3';
    else if (id <= 45) svcId = 'svc5';
    else svcId = 'svc6';
    const el = document.getElementById(svcId);
    if (el) el.checked = true;
  }

  const formSteps = document.getElementById('formSteps');
  const formStepEls = [1, 2, 3].map(step => document.getElementById(`formStep${step}`));
  let currentStep = 1;

  function nextStep(step) {
    formStepEls[currentStep - 1].style.display = 'none';
    document.getElementById(`step${currentStep}-indicator`).classList.remove('active');
    document.getElementById(`step${currentStep}-indicator`).classList.add('done');
    formStepEls[step - 1].style.display = 'block';
    document.getElementById(`step${step}-indicator`).classList.add('active');
    document.getElementById(`step${step}-indicator`).classList.remove('done');
    currentStep = step;
    window.scrollTo({ top: document.querySelector('.apply-form-wrap').offsetTop - 100, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-next-step]').forEach(button => {
    button.addEventListener('click', () => nextStep(Number(button.dataset.nextStep)));
  });

  document.querySelectorAll('[data-prev-step]').forEach(button => {
    button.addEventListener('click', () => nextStep(Number(button.dataset.prevStep)));
  });

  const applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!document.getElementById('agree').checked) {
        alert('개인정보처리방침에 동의해주세요.');
        return;
      }
      this.style.display = 'none';
      formSteps.style.display = 'none';
      document.querySelector('.form-header').style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
    });
  }

  document.querySelectorAll('[data-faq-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.faq-item')?.classList.toggle('open');
    });
  });
});
