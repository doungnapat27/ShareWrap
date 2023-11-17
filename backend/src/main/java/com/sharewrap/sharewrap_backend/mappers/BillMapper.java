package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.BillDto;
import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.models.UserBill;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;
import java.util.Base64;
import java.util.List;

@Mapper(componentModel = "spring")
public interface BillMapper {

    // Convert BillDto to Bill, with specific mapping for 'receipt'
    @Mapping(source = "receipt", target = "receipt", qualifiedByName = "base64ToBlob")
    Bill toBill(BillDto billDto);

    // Convert Bill to BillDto, with specific mapping for 'receipt'
    @Mapping(source = "receipt", target = "receipt", qualifiedByName = "blobToBase64")
    BillDto toBillDto(Bill bill);

    List<BillDto> toBillDtos(List<Bill> bills);

    @Mapping(target = "receipt", source = "receipt", qualifiedByName = "blobToBase64")
    UserBillDto toUserBillDto(UserBill userBill);

    @Mapping(target = "receipt", source = "receipt", qualifiedByName = "base64ToBlob")
    UserBill toUserBill(UserBillDto userBillDto);

    void updateBill(@MappingTarget Bill target, Bill source);

    // Base64 to Blob conversion
    @Named("base64ToBlob")
    default byte[] base64ToBlob(String base64String) {
        if (base64String == null || base64String.isEmpty()) {
            return null;
        }
        return Base64.getDecoder().decode(base64String);
    }

    // Blob to Base64 conversion
    @Named("blobToBase64")
    default String blobToBase64(byte[] imageBytes) {
        if (imageBytes == null || imageBytes.length == 0) {
            return null;
        }
        return Base64.getEncoder().encodeToString(imageBytes);
    }
}
