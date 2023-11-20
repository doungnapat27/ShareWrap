package com.sharewrap.sharewrap_backend.dtos;

import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.models.Item;
import com.sharewrap.sharewrap_backend.models.Promptpay;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class UserBillDto {

    private Long id;
    @NotNull
    private String userId;

    @NotNull
    private Long billId;

    @NotNull
    private Double shareTotal;

    private boolean isPaid;

    private boolean isApprove;

    @NotNull
    private List<ItemDto> items;

    private char paymentType;

    private String billName;

    private String billOwnerName;

    private Date billCreatedDate;

    private PromptpayDto promptpayDto;

    private BankAccountDto bankAccountDto;

    private String receipt;

    private Date uploadedDate;

    public void setIsApprove(Boolean isApprove) {
        this.isApprove = isApprove;
    }

    public void setIsPaid(Boolean isPaid) {
        this.isPaid = isPaid;
    }
}
