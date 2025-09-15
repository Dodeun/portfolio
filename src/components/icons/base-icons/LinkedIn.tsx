import type { TechIconProps } from "../tech-icons/tech-icons.types";

function LinkedInIcon({ className }: TechIconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.8889 31.8889H25.3595V20.768C25.3595 17.7189 24.201 16.015 21.7876 16.015C19.1622 16.015 17.7906 17.7882 17.7906 20.768V31.8889H11.4981V10.7037H17.7906V13.5573C17.7906 13.5573 19.6826 10.0565 24.1782 10.0565C28.6718 10.0565 31.8889 12.8005 31.8889 18.4757V31.8889ZM3.99124 7.92968C1.8479 7.92968 0.111084 6.17924 0.111084 4.0204C0.111084 1.86155 1.8479 0.111115 3.99124 0.111115C6.13459 0.111115 7.87036 1.86155 7.87036 4.0204C7.87036 6.17924 6.13459 7.92968 3.99124 7.92968ZM0.742088 31.8889H7.3035V10.7037H0.742088V31.8889Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default LinkedInIcon;
